import type { Meta, StoryObj } from "@storybook/react-vite";

import type { SupportedLanguage } from "../i18n/types.i18n.js";
import {
  GoodPracticeCard,
  GoodPracticeCardSkeleton,
} from "../components/shared/GoodPracticeCard.jsx";
import type { GoodPractice } from "pagopa-interop-public-models";

const meta = {
  title: "Components/GoodPracticeCard",
  component: GoodPracticeCard,
  tags: ["autodocs"],
  args: {
    currentLocale: "it" satisfies SupportedLanguage,
    goodPractice: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Mobilità senza barriere con il CUDE interoperabile",
      slug: "mobilita-senza-barriere-con-il-cude-interoperabile",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "it",
      isFeaturedInHomepage: true,
      category: "Mobilità e Trasporti",
      tenantMacrocategories: [
        {
          id: 2,
          label: "Comuni",
        },
      ],
    } as GoodPractice,
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
      title:
        "Verifica automatica della frequenza: accesso più rapido alle borse di studio",
      category: "Istruzione",
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regioni e Province Autonome",
        },
        {
          id: 5,
          label: "Province e Città metropolitane",
        },
        {
          id: 1,
          label: "PA centrali",
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
      title: "Dati anagrafici precompilati per servizi più efficienti",
      category: "Servizi al cittadino",
      tenantMacrocategories: [],
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
      title:
        "Erogare bonus ai cittadini in modo equo ed efficiente attraverso l'integrazione con sistemi digitali avanzati",
      category: "Welfare",
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regioni e Province Autonome",
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
