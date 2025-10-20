import React from 'react'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { GoodPracticeCard } from '../shared/GoodPracticeCard.js'
import { ORGANIZATION_TYPES, type OrganizationType } from '../../config/constants.js'
import { OrganizationTypeFilter } from './OrganizationTypeFilter.js'
import { useSearchParams } from '../../hooks/useSearchParams.js'
import { z } from 'zod'

const MOCK_CATEGORIES: { title: string; intendedTargets: OrganizationType[]; category: string }[] =
  [
    {
      title: 'Erogare i bonus ai cittadini in modo equo ed efficiente',
      intendedTargets: ['pac', 'comuni', 'regioni', 'universita'],
      category: 'Bonus Economici',
    },
    {
      title: 'Iscrizione ai concorsi pubblici più snella',
      intendedTargets: ['pac', 'comuni', 'regioni', 'universita'],
      category: 'Bonus Economici',
    },
    {
      title: 'Verifica immediata dell’iscrizione all’albo degli avvocati',
      intendedTargets: ['pac', 'comuni', 'regioni', 'universita'],
      category: 'Bonus Economici',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl nunc, feugiat...',
      intendedTargets: ['pac', 'comuni', 'regioni', 'universita'],
      category: 'Bonus Economici',
    },
    {
      title: 'Pellentesque pretium urna ipsum, a consectetur orci tincidunt nec.',
      intendedTargets: ['pac', 'comuni', 'regioni', 'universita'],
      category: 'Bonus Economici',
    },
  ]

const organizationTypeValues = ORGANIZATION_TYPES.map((o) => o.key) as [
  OrganizationType,
  ...OrganizationType[],
]

export const GoodPracticesCatalog: React.FC<{ currentLocale: SupportedLanguage }> = ({
  currentLocale,
}) => {
  const [searchParams, setSearchParams] = useSearchParams(
    z.object({
      organizationType: z.enum(organizationTypeValues),
    })
  )

  const selectedOrganizationType: OrganizationType = searchParams.organizationType || 'tutti'

  const handleSelectedOrganizationTypeChange = (organizationType: OrganizationType) => {
    setSearchParams({ organizationType })
  }

  return (
    <div className="d-flex justify-content-around gap-4">
      <span className="d-none d-md-block">
        <OrganizationTypeFilter
          currentLocale={currentLocale}
          onSelectedOrganizationTypeChange={handleSelectedOrganizationTypeChange}
          selectedOrganizationType={selectedOrganizationType}
        />
      </span>
      <div className="d-flex flex-column gap-4">
        {MOCK_CATEGORIES.map((c) => (
          <GoodPracticeCard currentLocale={currentLocale} {...c} />
        ))}
      </div>
    </div>
  )
}
