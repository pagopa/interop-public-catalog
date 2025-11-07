import React from "react";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
import {
  GoodPracticeCard,
  GoodPracticeCardSkeleton,
} from "../shared/GoodPracticeCard.js";
import useSwr from "swr";
import { MacroCategoryIdFilter } from "./MacroCategoryIdFilter.jsx";
import { apiService } from "../../services/api.services.js";
import { parseAsInteger, useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";

type GoodPracticesCatalogProps = {
  defaultMacroCategoryId: number | null;
  currentLocale: SupportedLanguage;
};

export const GoodPracticesCatalog_: React.FC<GoodPracticesCatalogProps> = ({
  currentLocale,
  defaultMacroCategoryId,
}) => {
  const [searchParams, setSearchParams] = useQueryState(
    "macroCategoryId",
    parseAsInteger,
  );

  const isServer = typeof window === "undefined";
  const selectedMacroCategoryId = isServer
    ? defaultMacroCategoryId
    : searchParams;

  const { data, isLoading } = useSwr(
    [currentLocale, selectedMacroCategoryId],
    async ([locale, macroCategoryId]) => {
      const [result] = await Promise.all([
        apiService.getGoodPractices({
          locale,
          macroCategoryId: macroCategoryId ?? undefined,
          limit: 50,
          offset: 0,
        }),
        new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 800 + 200),
        ), // Simulate network latency
      ]);
      return result;
    },
  );

  const handleSelectedMacroCategoryIdChange = (
    macroCategoryId: number | null,
  ) => {
    setSearchParams(macroCategoryId);
  };

  return (
    <div className="row">
      <div className="col-4 d-none d-lg-block">
        <MacroCategoryIdFilter
          currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={handleSelectedMacroCategoryIdChange}
          selectedMacroCategoryId={selectedMacroCategoryId ?? null}
        />
      </div>
      <div className="col-12 col-lg-8 d-flex flex-column align-items-center gap-4 flex-fill">
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
  );
};

export const GoodPracticesCatalog: React.FC<GoodPracticesCatalogProps> = (
  props,
) => {
  return (
    <NuqsAdapter>
      <GoodPracticesCatalog_ {...props} />
    </NuqsAdapter>
  );
};

export const GoodPracticesCatalogSkeleton: React.FC<{
  selectedMacroCategoryId: number | null;
  currentLocale: SupportedLanguage;
}> = ({ selectedMacroCategoryId, currentLocale }) => {
  return (
    <div className="row">
      <div className="col-4 d-none d-lg-block">
        <MacroCategoryIdFilter
          currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={() => {}}
          selectedMacroCategoryId={selectedMacroCategoryId}
        />
      </div>
      <div className="col-12 col-lg-8 d-flex flex-column align-items-center gap-4 flex-fill">
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
        <GoodPracticeCardSkeleton />
      </div>
    </div>
  );
};
