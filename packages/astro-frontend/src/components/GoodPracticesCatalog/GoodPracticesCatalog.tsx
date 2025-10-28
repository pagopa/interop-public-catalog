import React from 'react'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { GoodPracticeCard } from '../shared/GoodPracticeCard.js'
import { useSearchParams } from '../../hooks/useSearchParams.js'
import { z } from 'zod'
import useSwr from 'swr'
import { MacroCategoryIdFilter } from './MacroCategoryIdFilter.jsx'

const fetcher = (url: string) => fetch(url).then((r) => r.json())
const createSearchParams = (params: Record<string, string | number | undefined>) => {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, String(value)])
    )
  )
}

export const GoodPracticesCatalog: React.FC<{ currentLocale: SupportedLanguage }> = ({
  currentLocale,
}) => {
  const [searchParams, setSearchParams] = useSearchParams(
    z.object({
      macroCategoryId: z.number(),
    })
  )

  const { data } = useSwr(
    `/api/good-practices?${createSearchParams({
      locale: currentLocale,
      macroCategoryId: searchParams.macroCategoryId,
    }).toString()}`,
    fetcher
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
        {data?.data.map((goodPractice) => (
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
