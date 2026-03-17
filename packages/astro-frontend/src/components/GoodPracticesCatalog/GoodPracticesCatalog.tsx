import React from "react";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
import {
  GoodPracticeCard,
  GoodPracticeCardSkeleton,
} from "../shared/GoodPracticeCard.js";
import useSwr from "swr";
import { MacroCategoryIdFilter } from "./MacroCategoryIdFilter.jsx";
import { apiService } from "../../services/api.services.js";
import { /* parseAsInteger,  */ parseAsString, useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";
import type { MacroCategory } from "../../types/collectionTypes.js";

//TODO watch comments

type GoodPracticesCatalogProps = {
  defaultMacroCategoryId: string | null;
  currentLocale: SupportedLanguage;
  tenantMacrocategories: MacroCategory[];
};

export const GoodPracticesCatalog_: React.FC<GoodPracticesCatalogProps> = ({
  currentLocale,
  defaultMacroCategoryId,
  tenantMacrocategories,
}) => {
  const [searchParams, setSearchParams] = useQueryState(
    "macroCategoryId",
    parseAsString,
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
    macroCategoryId: string | null,
  ) => {
    setSearchParams(macroCategoryId);
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-4 mb-default mb-lg-0">
        <MacroCategoryIdFilter
          // currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={handleSelectedMacroCategoryIdChange}
          selectedMacroCategoryId={selectedMacroCategoryId ?? null}
          tenantMacrocategories={tenantMacrocategories}
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
              key={goodPractice.Slug}
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
  selectedMacroCategoryId: string | null;
  tenantMacrocategories: MacroCategory[];
  // currentLocale: SupportedLanguage;
}> = ({
  selectedMacroCategoryId,
  tenantMacrocategories /* currentLocale */,
}) => {
  return (
    <div className="row">
      <div className="col-4 d-none d-lg-block">
        <MacroCategoryIdFilter
          // currentLocale={currentLocale}
          onSelectedMacroCategoryIdChange={() => {}}
          selectedMacroCategoryId={selectedMacroCategoryId}
          tenantMacrocategories={tenantMacrocategories}
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
