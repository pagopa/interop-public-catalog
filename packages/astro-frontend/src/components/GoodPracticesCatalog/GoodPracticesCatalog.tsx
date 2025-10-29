import React from 'react'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { GoodPracticeCard, GoodPracticeCardSkeleton } from '../shared/GoodPracticeCard.js'
import { useSearchParams } from '../../hooks/useSearchParams.js'
import { z } from 'zod'
import useSwr from 'swr'
import { MacroCategoryIdFilter } from './MacroCategoryIdFilter.jsx'
import { apiService } from '../../services/api.services.js'

export const GoodPracticesCatalog: React.FC<{
  defaultMacroCategoryId: number | undefined
  currentLocale: SupportedLanguage
}> = ({ currentLocale, defaultMacroCategoryId }) => {
  const [searchParams, setSearchParams] = useSearchParams(
    z.object({
      macroCategoryId: z.coerce.number(),
    })
  )

  const isServer = typeof window === 'undefined'
  const selectedMacroCategoryId = isServer ? defaultMacroCategoryId : searchParams.macroCategoryId

  const { data, isLoading } = useSwr(
    [currentLocale, selectedMacroCategoryId],
    async ([locale, macroCategoryId]) => {
      const [result] = await Promise.all([
        apiService.getGoodPractices({ locale, macroCategoryId, limit: 50, offset: 0 }),
        new Promise((resolve) => setTimeout(resolve, Math.random() * 800 + 200)), // Simulate network latency
      ])
      return result
    }
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
          selectedMacroCategoryId={selectedMacroCategoryId ?? null}
        />
      </span>
      <div className="d-flex flex-column align-items-center gap-4 flex-fill">
        {(isLoading || isServer) && (
          <>
            <GoodPracticeCardSkeleton />
            <GoodPracticeCardSkeleton />
            <GoodPracticeCardSkeleton />
            <GoodPracticeCardSkeleton />
          </>
        )}

        {!isLoading &&
          data?.results.map((goodPractice) => (
            <GoodPracticeCard
              key={goodPractice.slug}
              currentLocale={currentLocale}
              goodPractice={goodPractice}
            />
          ))}
      </div>
    </div>
  )
}

export const GoodPracticesCatalogSkeleton: React.FC<{
  selectedMacroCategoryId: number | null
  currentLocale: SupportedLanguage
}> = ({ selectedMacroCategoryId, currentLocale }) => {
  return (
    <div className="d-flex justify-content-around gap-4">
      <span className="d-none d-md-block">
        <MacroCategoryIdFilter
          currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={() => {}}
          selectedMacroCategoryId={selectedMacroCategoryId}
        />
      </span>
      <div className="d-flex flex-column align-items-center gap-4 flex-fill">
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
      </div>
    </div>
  )
}
