import type { Meta, StoryObj } from "@storybook/react-vite";

import type { SupportedLanguage } from "../i18n/types.i18n.js";
import {
  GoodPracticeCard,
  GoodPracticeCardSkeleton,
} from "../components/shared/GoodPracticeCard.jsx";
// import type { GoodPractice } from "pagopa-interop-public-models";
import type { EsempiPratici } from "../types/collectionTypes.js";

// TODO remove comments
// TODO fare mock
const mockedStrapiImage = {
  id: 1,
  documentId: "file_asset_98765",
  name: "hero_banner.png",
  alternativeText: "Un banner moderno per il sito web",
  caption: "Banner della homepage",
  width: 1920,
  height: 1080,
  formats: {
    thumbnail: {
      name: "thumbnail_hero_banner.png",
      hash: "thumb_hero_123",
      ext: ".png",
      mime: "image/png",
      path: null,
      width: 156,
      height: 88,
      size: 12.5,
      sizeInBytes: 12800,
      url: "/uploads/thumbnail_hero_banner.png",
    },
    small: {
      name: "small_hero_banner.png",
      hash: "small_hero_123",
      ext: ".png",
      mime: "image/png",
      path: null,
      width: 500,
      height: 281,
      size: 45.8,
      sizeInBytes: 46899,
      url: "/uploads/small_hero_banner.png",
    },
    medium: {
      name: "medium_hero_banner.png",
      hash: "medium_hero_123",
      ext: ".png",
      mime: "image/png",
      path: null,
      width: 750,
      height: 422,
      size: 89.2,
      sizeInBytes: 91340,
      url: "/uploads/medium_hero_banner.png",
    },
  },
  hash: "hero_banner_full_123",
  ext: ".png",
  mime: "image/png",
  size: 150.5,
  url: "/uploads/hero_banner.png",
  previewUrl: null,
  provider: "local",
  provider_metadata: null,
  createdAt: "2024-03-16T14:30:00.000Z",
  updatedAt: "2024-03-16T14:35:00.000Z",
  publishedAt: "2024-03-16T14:30:00.000Z",
};

const meta = {
  title: "Components/GoodPracticeCard",
  component: GoodPracticeCard,
  tags: ["autodocs"],
  args: {
    currentLocale: "it" satisfies SupportedLanguage,
    // goodPractice: {
    //   id: 12,
    //   documentId: "zflr58yvojfzixgi4ob4jxfq",
    //   title: "Mobilità senza barriere con il CUDE interoperabile",
    //   slug: "mobilita-senza-barriere-con-il-cude-interoperabile",
    //   publishedDate: "2025-10-17",
    //   createdAt: "2025-10-16T08:10:56.095Z",
    //   updatedAt: "2025-10-17T12:40:30.370Z",
    //   publishedAt: "2025-10-17T12:40:30.381Z",
    //   locale: "it",
    //   isFeaturedInHomepage: true,
    //   category: "Mobilità e Trasporti",
    //   tenantMacrocategories: [
    //     {
    //       id: 2,
    //       label: "Comuni",
    //     },
    //   ],
    // }
    goodPractice: {
      Title: "Mobilità senza barriere con il CUDE interoperabile",
      Slug: "mobilita-senza-barriere-con-il-cude-interoperabile",
      Field: "Mobilità e Trasporti",
      GoodPracticeTenantDestination: "Comuni",
      macrocategories: [
        {
          MacroCategoryId: "2",
          MacroCategoryLabel: "Comuni",
          Illustration: mockedStrapiImage,
        },
      ],
      LastUpdate: "2025-10-17T12:40:30.370Z",
      PageIndexLabel: "Indice della pagina",
      RelatedEservices: [{ EServiceId: "test-id" }],
      EsempiPraticiSection: [
        {
          __component: "esempi-pratici.simple-description",
          SectionId: "1",
          Description: [
            {
              type: "text",
              text: "Descrizione di Mobilità senza barriere con il CUDE interoperabile",
            },
          ],
          Title: "Descrizione",
        },
      ],
      Seo: {
        MetaTitle: "Meta title",
        MetaDescription: "Meta description",
        OpenGraphImage: mockedStrapiImage,
        TwitterImage: mockedStrapiImage,
      },
    } as EsempiPratici,
  },
  argTypes: {
    currentLocale: {
      control: { type: "select" },
      options: ["it", "en"],
      description: "Lingua utilizzata per le etichette di sistema.",
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Card riutilizzabile per presentare le buone pratiche nel catalogo, con bookmark icon e link per maggiori dettagli.",
      },
    },
  },
  render: (args) => (
    <div style={{ maxWidth: "636px", margin: "0 auto" }}>
      <GoodPracticeCard {...args} />
    </div>
  ),
} satisfies Meta<typeof GoodPracticeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default - Con categoria specifica",
  parameters: {
    viewport: {
      defaultViewport: "md",
    },
    docs: {
      description: {
        story: "Stato di default con categoria specifica e destinatari target.",
      },
    },
  },
};

export const MultipleTargets: Story = {
  args: {
    goodPractice: {
      ...meta.args.goodPractice,
      Title:
        "Verifica automatica della frequenza: accesso più rapido alle borse di studio",
      Field: "Istruzione",
      macrocategories: [
        {
          MacroCategoryId: "3",
          MacroCategoryLabel: "Regioni e Province Autonome",
          Illustration: mockedStrapiImage,
        },
        {
          MacroCategoryId: "5",
          MacroCategoryLabel: "Province e Città metropolitane",
          Illustration: mockedStrapiImage,
        },
        {
          MacroCategoryId: "1",
          MacroCategoryLabel: "PA centrali",
          Illustration: mockedStrapiImage,
        },
      ],
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "lg",
    },
    docs: {
      description: {
        story:
          "Card con più categorie di destinatari target che vengono concatenate.",
      },
    },
  },
};

export const NoTargets: Story = {
  args: {
    goodPractice: {
      ...meta.args.goodPractice,
      Title: "Dati anagrafici precompilati per servizi più efficienti",
      Field: "Servizi al cittadino",
      macrocategories: [],
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
    docs: {
      description: {
        story:
          'Card senza destinatari specifici, mostra "Tutti" come fallback.',
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    goodPractice: {
      ...meta.args.goodPractice,
      Title:
        "Erogare bonus ai cittadini in modo equo ed efficiente attraverso l'integrazione con sistemi digitali avanzati",
      Field: "Welfare",
      macrocategories: [
        {
          MacroCategoryId: "3",
          MacroCategoryLabel: "Regioni e Province Autonome",
          Illustration: mockedStrapiImage,
        },
      ],
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "md",
    },
    docs: {
      description: {
        story:
          "Card con titolo lungo per testare il layout e il wrapping del testo.",
      },
    },
  },
};

export const Skeleton: Story = {
  render: (args) => (
    <div style={{ maxWidth: "636px", margin: "0 auto", position: "relative" }}>
      <GoodPracticeCardSkeleton />
      <div style={{ position: "absolute", top: 0, opacity: 0.1 }}>
        <GoodPracticeCard {...args} />
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "md",
    },
    docs: {
      description: {
        story:
          "Versione skeleton per il loading state con placeholder animati.",
      },
    },
  },
};
