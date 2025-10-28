import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import type { SupportedLanguage } from '../i18n/types.i18n'
import { EServiceCard, EServiceCardSkeleton } from '../components/shared/EServiceCard'

const meta = {
  title: 'Components/EServiceCard',
  component: EServiceCard,
  tags: ['autodocs'],
  args: {
    currentLocale: 'it' satisfies SupportedLanguage,
    name: 'Piattaforma dati demografici',
    description:
      'API per consultare i dati anagrafici aggiornati dei cittadini con meccanismi di caching e rate limiting.',
    producerName: 'Dipartimento per la trasformazione digitale',
    eserviceId: 'eservice-12345',
    isOpenData: false,
  },
  argTypes: {
    currentLocale: {
      control: { type: 'select' },
      options: ['it', 'en'],
      description: 'Lingua utilizzata per le etichette di sistema.',
    },
    isOpenData: {
      control: { type: 'boolean' },
      description: 'Mostra il badge Open Data quando attivo.',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card riutilizzabile per presentare le schede API nel catalogo, con badge per accesso riservato o Open Data.',
      },
    },
  },
  render: (args) => (
    <div style={{ maxWidth: '360px', margin: '0 auto' }}>
      <EServiceCard {...args} />
    </div>
  ),
} satisfies Meta<typeof EServiceCard>

export default meta

type Story = StoryObj<typeof meta>

export const AccessReserved: Story = {
  name: 'Default - Accesso riservato',
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
    docs: {
      description: {
        story: 'Stato di default con badge di accesso riservato e testo in italiano.',
      },
    },
  },
}

export const OpenData: Story = {
  args: {
    isOpenData: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
    docs: {
      description: {
        story: 'Badge Open Data e testo breve per evidenziare lo stato pubblico della risorsa.',
      },
    },
  },
}

export const Skeleton: Story = {
  render: (args) => (
    <div style={{ maxWidth: '360px', margin: '0 auto', position: 'relative' }}>
      <EServiceCardSkeleton />
      <div style={{ position: 'absolute', top: 0, opacity: 0.1 }}>
        <EServiceCard {...args} />
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
}
