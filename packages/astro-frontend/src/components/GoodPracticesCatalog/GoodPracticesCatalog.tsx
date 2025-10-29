import React from 'react'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { GoodPracticeCard } from '../shared/GoodPracticeCard.js'
import { useSearchParams } from '../../hooks/useSearchParams.js'
import { z } from 'zod'
import useSwr from 'swr'
import { MacroCategoryIdFilter } from './MacroCategoryIdFilter.jsx'
import { apiService } from '../../services/api.services.js'

export const GoodPracticesCatalog: React.FC<{ currentLocale: SupportedLanguage }> = ({
  currentLocale,
}) => {
  const [searchParams, setSearchParams] = useSearchParams(
    z.object({
      macroCategoryId: z.coerce.number(),
    })
  )

  const { data } = useSwr(
    [currentLocale, searchParams.macroCategoryId],
    ([locale, macroCategoryId]) =>
      apiService.getGoodPractices({ locale, macroCategoryId, limit: 50, offset: 0 })
  )

  const handleSelectedMacroCategoryIdChange = (macroCategoryId: number | null) => {
    setSearchParams({ macroCategoryId: macroCategoryId ?? undefined })
  }

  return (
    <div className="d-flex justify-content-around gap-4">
      <span className="d-none d-md-block">
        <MacroCategoryIdFilter
          currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={handleSelectedMacroCategoryIdChange}
          selectedMacroCategoryId={searchParams.macroCategoryId ?? null}
        />
      </span>
      <div className="d-flex flex-column gap-4">
        {data?.results.map((goodPractice) => (
          <GoodPracticeCard
            key={goodPractice.id}
            currentLocale={currentLocale}
            goodPractice={goodPractice}
          />
        ))}
      </div>
    </div>
  )
}
