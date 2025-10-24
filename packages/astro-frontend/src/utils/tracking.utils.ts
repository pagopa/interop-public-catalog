import mixpanel from 'mixpanel-browser/src/loaders/loader-module-core'

const TARG_COOKIES_GROUP = 'C0002'
declare const OnetrustActiveGroups: string

function areCookiesAccepted(): boolean {
  try {
    return (
      typeof OnetrustActiveGroups !== 'undefined' &&
      Boolean(OnetrustActiveGroups) &&
      OnetrustActiveGroups.includes(TARG_COOKIES_GROUP)
    )
  } catch {
    return false
  }
}

let didMixpanelInit = false

export function initMixpanel({ projectId }: { projectId: string }) {
  if (didMixpanelInit || !areCookiesAccepted()) {
    return
  }

  mixpanel.init(projectId, {
    api_host: 'https://api-eu.mixpanel.com',
    persistence: 'localStorage',
    debug: true,
    autocapture: {
      pageview: 'full-url',
    },
    ip: false,
    property_blacklist: ['$current_url', '$initial_referrer', '$referrer'],
  })

  didMixpanelInit = true
}

type TrackingData =
  | {
      key: 'INTEROP_FAQ_OPEN'
      payload: {
        faqId: string
        faqTitle: string
      }
    }
  | {
      key: 'INTEROP_TOOLTIP_OPEN'
      payload: {
        pageId: string
        tooltipId: string
        tooltipType: string
      }
    }
  | {
      key: 'INTEROP_EXTERNAL_LINK_VISIT'
      payload: {
        pageId: string
        linkId: string
        linkDescription: string
        href: string
      }
    }
  | {
      key: 'INTEROP_CATALOG_FILTERS_APPLY'
      payload: {
        q: string
        producerId: string
        producerName: string
        tenantMacrocategoryId: string
        tenantMacrocategoryName: string
      }
    }
  | {
      key: 'INTEROP_HOMEPAGE_CATALOG_FILTER_APPLY'
      payload: {
        q: string
      }
    }
  | {
      key: 'INTEROP_HOMEPAGE_GOOD_PRACTICE_CARD_CLICK'
      payload: {
        goodPracticeId: string
        goodPracticeCategory: string
        goodPracticeTitle: string
      }
    }
  | {
      key: 'INTEROP_HOMEPAGE_GOOD_PRACTICE_REFERRAL'
      payload: {
        referral: 'header' | 'how-it-works' | 'best-practice-section'
        goodPracticeCategory?: string
      }
    }

type TrackingPayload<TKey extends TrackingData['key']> = Extract<
  TrackingData,
  { key: TKey }
>['payload']

export function track<TKey extends TrackingData['key']>(
  eventKey: TKey,
  eventPayload: TrackingPayload<TKey>
) {
  if (!areCookiesAccepted() || !didMixpanelInit) return
  mixpanel.track(eventKey, eventPayload)
}
