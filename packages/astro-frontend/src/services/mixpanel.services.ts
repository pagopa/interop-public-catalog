import mixpanel, { type Config } from "mixpanel-browser";
import type { CatalogFilterParams } from "../components/EServiceCatalog/types";
import { isDevEnvironment } from "../config/constants";
import { z } from "zod";

const MIXPANEL_CONFIG: Partial<Config> = {
  api_host: "https://api-eu.mixpanel.com",
  persistence: "localStorage",
  debug: false,
  autocapture: {
    pageview: "full-url",
    rage_click: false,
    submit: false,
    input: false,
    dead_click: false,
    scroll: false,
    click: false,
  },
  ip: false,
  property_blacklist: ["$current_url", "$initial_referrer", "$referrer"],
};

type MixpanelTrackingData =
  | {
      key: "INTEROP_FAQ_OPEN";
      payload: {
        faqId: string;
        faqTitle: string;
      };
    }
  | {
      key: "INTEROP_TOOLTIP_OPEN";
      payload: {
        tooltipId: string;
        tooltipType: "info";
      };
    }
  | {
      key: "INTEROP_EXTERNAL_LINK_VISIT";
      payload: {
        linkId: string;
        linkDescription: string;
        href: string;
      };
    }
  | {
      key: "INTEROP_CATALOG_FILTERS_APPLY";
      payload: {
        q: string;
        producersId: string;
        producersName: string;
        tenantMacrocategoriesId: string;
        tenantMacrocategoriesName: string;
      };
    }
  | {
      key: "INTEROP_HOMEPAGE_CATALOG_FILTER_APPLY";
      payload: {
        q: string;
      };
    }
  | {
      key: "INTEROP_HOMEPAGE_GOOD_PRACTICE_CARD_CLICK";
      payload: {
        goodPracticeId: number;
        goodPracticeCategory: string;
        goodPracticeTitle: string;
      };
    }
  | {
      key: "INTEROP_HOMEPAGE_GOOD_PRACTICE_REFERRAL";
      payload: {
        referral:
          | "header"
          | "how-it-works"
          | "best-practice-section"
          | "footer";
        goodPracticeTenantMacrocategoryId?: string;
      };
    };

const createLogMessage = (message: string) => {
  return `[Mixpanel] ${message}`;
};

const shouldLog = () => {
  return (
    typeof window !== "undefined" && isDevEnvironment(window.location.href)
  );
};

const mixpanelLogger = {
  warn: (message: string, data?: unknown) => {
    if (shouldLog()) console.warn(createLogMessage(message), data);
  },
  info: (message: string, data?: unknown) => {
    if (shouldLog()) console.info(createLogMessage(message), data);
  },
  error: (message: string, data?: unknown) => {
    if (shouldLog()) console.error(createLogMessage(message), data);
  },
};

let didMixpanelInit = false;
function init({ projectId }: { projectId: string }) {
  if (didMixpanelInit) {
    mixpanelLogger.warn(
      "Initialization function called more than once. Ignoring subsequent calls."
    );
    return;
  }
  if (typeof window === "undefined") {
    mixpanelLogger.warn(
      "Mixpanel initialization attempted during SSR. Initialization skipped."
    );
    return;
  }

  if (!import.meta.env.DEV) {
    mixpanel.init(projectId, MIXPANEL_CONFIG);
  }

  mixpanelLogger.info("Mixpanel initialized successfully.");
  didMixpanelInit = true;
}

function track<Key extends MixpanelTrackingData["key"]>(
  event: Key,
  payload: Extract<MixpanelTrackingData, { key: Key }>["payload"],
  options?: Parameters<typeof mixpanel.track>[2],
  callback?: Parameters<typeof mixpanel.track>[3]
) {
  if (typeof window === "undefined") {
    mixpanelLogger.warn("Tracking attempted during SSR. Tracking skipped.", {
      event,
      payload,
    });
    return;
  }

  if (!didMixpanelInit) {
    mixpanelLogger.warn(
      "Tracking attempted before Mixpanel initialization. Tracking skipped.",
      {
        event,
        payload,
      }
    );
    return;
  }

  if (!import.meta.env.DEV) {
    mixpanel.track(event, payload, options, callback);
  }

  mixpanelLogger.info(`Tracked ${event} event`, { payload });
}

/**
 * Binds the INTEROP_HOMEPAGE_CATALOG_FILTER_APPLY event tracking to the hero search form submission.
 * The event should be triggered when the user submits the search form located in the hero homepage.
 */
export function bindTrackingHomepageCatalogFilterApplyEvent(
  heroFormId: string
) {
  const EVENT =
    "INTEROP_HOMEPAGE_CATALOG_FILTER_APPLY" as const satisfies MixpanelTrackingData["key"];
  const form = document.getElementById(heroFormId);

  if (!form) {
    mixpanelLogger.error(`Form with id "${heroFormId}" not found.`, {
      event: EVENT,
    });
    return;
  }

  form.addEventListener("submit", (event) => {
    if (!event.target || !(event.target instanceof HTMLFormElement)) {
      mixpanelLogger.error("Event target not found on form submit.", {
        event: EVENT,
      });
      return;
    }

    const formData = new FormData(event.target);
    const query = formData.get("q")?.toString().trim();

    const payload = { q: query || "" };

    track(EVENT, payload, {
      transport: "sendBeacon",
    });
  });
}

/**
 * Tracks the INTEROP_CATALOG_FILTERS_APPLY event with Mixpanel.
 * The event should be triggered when the user applies filters in the e-service catalog page.
 */
export function trackCatalogFiltersApplyEvent(
  eserviceFiltersState: CatalogFilterParams
) {
  const payload = {
    q: eserviceFiltersState.q,
    producersId: eserviceFiltersState.provider.map((p) => p.value).join(","),
    producersName: eserviceFiltersState.provider.map((p) => p.label).join(","),
    tenantMacrocategoriesId: eserviceFiltersState.consumer
      .map((c) => c.value)
      .join(","),
    tenantMacrocategoriesName: eserviceFiltersState.consumer
      .map((c) => c.label)
      .join(","),
  };

  track("INTEROP_CATALOG_FILTERS_APPLY", payload);
}

/**
 * Binds the INTEROP_FAQ_OPEN event tracking to the FAQ section.
 * The event should be triggered when the user expands a FAQ accordion.
 *
 * Each FAQ accordion item should have the following attributes:
 * - data-mp-faq-id: the unique identifier of the FAQ item
 * - data-mp-faq-title: the title of the FAQ item
 */
function bindTrackingFaqOpenEvent() {
  const MP_DATA_FAQ_ID_ATTR = "data-mp-faq-id";
  const MP_DATA_FAQ_TITLE_ATTR = "data-mp-faq-title";
  const EVENT =
    "INTEROP_FAQ_OPEN" as const satisfies MixpanelTrackingData["key"];

  document.addEventListener("shown.bs.collapse", (e) => {
    const target = e.target;

    if (!(target instanceof HTMLElement)) {
      mixpanelLogger.error("Event target is not an HTMLElement.", {
        event: EVENT,
      });
      return;
    }

    const faqId = target.getAttribute(MP_DATA_FAQ_ID_ATTR);
    const faqTitle = target.getAttribute(MP_DATA_FAQ_TITLE_ATTR);

    if (!faqId || !faqTitle) {
      mixpanelLogger.error(
        ` ${MP_DATA_FAQ_ID_ATTR} or ${MP_DATA_FAQ_TITLE_ATTR} attributes not found on the target element.`,
        {
          event: EVENT,
          target,
          faqTitle,
          faqId,
        }
      );
      return;
    }

    track(EVENT, {
      faqId,
      faqTitle,
    });
  });
}

/**
 * Binds the INTEROP_HOMEPAGE_GOOD_PRACTICE_CARD_CLICK event tracking to good practice cards.
 * The event should be triggered when the user clicks on a good practice card link in the homepage.
 *
 * Each good practice card should have the attribute `data-mp-good-practice-card-data` with a JSON string containing:
 * - goodPracticeId: string
 * - goodPracticeCategory: string
 * - goodPracticeTitle: string
 */
function bindTrackingGoodPracticeCardClickEvent() {
  const MIXPANEL_DATA_ATTRIBUTE_NAME = "data-mp-good-practice-card-data";
  const ATTR_CARD_BOUND = "data-mp-good-practice-card-bound";
  const EVENT =
    "INTEROP_HOMEPAGE_GOOD_PRACTICE_CARD_CLICK" as const satisfies MixpanelTrackingData["key"];

  const CardMetadataSchema = z.preprocess(
    (val) => JSON.parse(String(val)),
    z.object({
      goodPracticeId: z.number(),
      goodPracticeCategory: z.string(),
      goodPracticeTitle: z.string(),
    })
  );

  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(`[${MIXPANEL_DATA_ATTRIBUTE_NAME}]`)
  );

  if (!cards.length) {
    mixpanelLogger.warn("No good practice cards found for binding.", {
      event: EVENT,
    });
    return;
  }

  mixpanelLogger.info(
    "Binding good practice card click tracking (delegation).",
    {
      totalCards: cards.length,
      cards: cards,
      event: EVENT,
    }
  );

  cards.forEach((c) => {
    if (c.getAttribute(ATTR_CARD_BOUND) === "true") {
      mixpanelLogger.warn(
        "Card already bound for good practice card click tracking. Skipping.",
        {
          card: c,
        }
      );
      return;
    }

    c.setAttribute(ATTR_CARD_BOUND, "true");

    const metadataResult = CardMetadataSchema.safeParse(
      c.getAttribute(MIXPANEL_DATA_ATTRIBUTE_NAME)
    );

    if (!metadataResult.success) {
      mixpanelLogger.error(
        `Invalid or missing Mixpanel good practice card data attribute on card element.`,
        {
          card: c,
          errors: metadataResult.error.errors,
        }
      );
      return;
    }

    c.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        const data = metadataResult.data;
        track(
          EVENT,
          {
            goodPracticeId: data.goodPracticeId,
            goodPracticeCategory: data.goodPracticeCategory,
            goodPracticeTitle: data.goodPracticeTitle,
          },
          {
            transport: "sendBeacon",
          }
        );
      });
    });
  });
}

let isExternalLinkVisitEventBound = false;

/**
 * Binds the INTEROP_EXTERNAL_LINK_VISIT event tracking to all external links.
 * The event should be triggered when the user clicks on an external link.
 * The reason it is bound globally is because external links can also be rendered by react,
 * not only statically by astro. Therefore, we need to capture clicks on the document level.
 *
 * Each external link should have the following attributes:
 * - data-mp-external-link-id: the unique identifier of the link
 * - data-mp-linkDescription: a short description of the link
 */
function bindTrackingExternalLinkVisitEvent() {
  const MIXPANEL_DATA_ATTRIBUTE_LINK_ID = "data-mp-external-link-id";
  const MIXPANEL_DATA_ATTRIBUTE_LINK_DESCRIPTION =
    "data-mp-external-link-description";
  const EVENT =
    "INTEROP_EXTERNAL_LINK_VISIT" as const satisfies MixpanelTrackingData["key"];

  if (isExternalLinkVisitEventBound) {
    mixpanelLogger.warn(
      "External link visit event tracking already bound. Ignoring subsequent binding calls.",
      {
        event: EVENT,
      }
    );
    return;
  }

  function isExternalLink(
    a: HTMLElement | null | undefined
  ): a is HTMLAnchorElement {
    if (!a || a.tagName !== "A") return false;
    const href = a.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("/")) return false;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

    let url;
    try {
      url = new URL(href, location.origin);
    } catch {
      return false;
    }

    return url.origin !== location.origin;
  }

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!isExternalLink(anchor)) return;

      const linkId = anchor.getAttribute(MIXPANEL_DATA_ATTRIBUTE_LINK_ID);
      const linkDescription = anchor.getAttribute(
        MIXPANEL_DATA_ATTRIBUTE_LINK_DESCRIPTION
      );
      const href = anchor.href;

      if (!linkId || !linkDescription) {
        mixpanelLogger.error(
          ` ${MIXPANEL_DATA_ATTRIBUTE_LINK_ID} or ${MIXPANEL_DATA_ATTRIBUTE_LINK_DESCRIPTION} attributes not found on the clicked external link.`,
          {
            event: EVENT,
            anchor,
            linkId,
            linkDescription,
          }
        );
        return;
      }

      track(
        EVENT,
        {
          linkId,
          linkDescription,
          href,
        },
        {
          transport: "sendBeacon",
        }
      );
    },
    true
  );

  isExternalLinkVisitEventBound = true;
}

/**
 * Binds the INTEROP_HOMEPAGE_GOOD_PRACTICE_REFERRAL event tracking to good practice card referrals.
 * The event should be triggered when the user clicks on a good practice card link in specific sections of the homepage.
 *
 * Each good practice card link should have the attribute `data-mp-good-practice-catalog-referral`
 * with one of the following values: 'header', 'how-it-works', 'best-practice-section', 'footer'.
 * Optionally, it can have the attribute `data-mp-good-practice-category` to specify the category of the good practice.
 */
function bindTrackingGoodPracticeReferralEvent() {
  const MIXPANEL_DATA_ATTRIBUTE_REFERRAL_TYPE_NAME =
    "data-mp-good-practice-catalog-referral";
  const MIXPANEL_DATA_ATTRIBUTE_GOOD_PRACTICE_CATEGORY_NAME =
    "data-mp-good-practice-category-id";
  const EVENT =
    "INTEROP_HOMEPAGE_GOOD_PRACTICE_REFERRAL" as const satisfies MixpanelTrackingData["key"];

  const GoodPracticeCatalogReferralTypeSchema = z.enum([
    "header",
    "how-it-works",
    "best-practice-section",
    "footer",
  ] as const satisfies Extract<
    MixpanelTrackingData,
    { key: typeof EVENT }
  >["payload"]["referral"][]);

  const goodPracticeAnchorElements = document.querySelectorAll<HTMLElement>(
    `[${MIXPANEL_DATA_ATTRIBUTE_REFERRAL_TYPE_NAME}]`
  );

  if (!goodPracticeAnchorElements.length) {
    mixpanelLogger.warn(
      "No good practice referral elements found for binding.",
      {
        event: EVENT,
      }
    );
    return;
  }

  mixpanelLogger.info("Binding good practice catalog referral tracking.", {
    totalElements: goodPracticeAnchorElements.length,
    elements: goodPracticeAnchorElements,
    event: EVENT,
  });

  goodPracticeAnchorElements.forEach((element) => {
    const validationResult = GoodPracticeCatalogReferralTypeSchema.safeParse(
      element.getAttribute(MIXPANEL_DATA_ATTRIBUTE_REFERRAL_TYPE_NAME)
    );

    if (!validationResult.success) {
      mixpanelLogger.error(
        `Invalid ${MIXPANEL_DATA_ATTRIBUTE_REFERRAL_TYPE_NAME} attribute on good practice referral element.`,
        {
          event: EVENT,
          element,
        }
      );
      return;
    }

    const referral = validationResult.data;

    element.addEventListener("click", () => {
      track(EVENT, {
        referral,
        goodPracticeTenantMacrocategoryId:
          element.getAttribute(
            MIXPANEL_DATA_ATTRIBUTE_GOOD_PRACTICE_CATEGORY_NAME
          ) || undefined,
      });
    });
  });
}

/**
 * Binds the INTEROP_TOOLTIP_OPEN event tracking to tooltip opens.
 * The event should be triggered when the user opens a tooltip.
 *
 * The tooltip id is taken from the `data-bs-title` attribute of the tooltip trigger element.
 * The tooltip type is hardcoded as 'info' for now. vbdsx
 */
function bindTrackingTooltipOpenEvent() {
  const EVENT =
    "INTEROP_TOOLTIP_OPEN" as const satisfies MixpanelTrackingData["key"];

  document.addEventListener("show.bs.popover", function (e) {
    const target = e.target;

    if (!(target instanceof HTMLElement)) {
      mixpanelLogger.error("Event target is not an HTMLElement.", {
        event: EVENT,
      });
      return;
    }

    const tooltipId = target
      .getAttribute("data-bs-title")
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    const tooltipType = "info" as const;

    if (!tooltipId) {
      mixpanelLogger.error(
        `data-bs-title attribute not found on the target element.`,
        {
          event: EVENT,
          target,
          tooltipId,
        }
      );
      return;
    }

    track(EVENT, {
      tooltipId,
      tooltipType,
    });
  });
}

export const mixpanelService = {
  init,
  bindTrackingHomepageCatalogFilterApplyEvent,
  trackCatalogFiltersApplyEvent,
  bindTrackingFaqOpenEvent,
  bindTrackingGoodPracticeCardClickEvent,
  bindTrackingExternalLinkVisitEvent,
  bindTrackingGoodPracticeReferralEvent,
  bindTrackingTooltipOpenEvent,
};
