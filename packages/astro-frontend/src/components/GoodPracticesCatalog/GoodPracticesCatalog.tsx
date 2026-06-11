import React from "react";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";
import {
  GoodPracticeCard,
  GoodPracticeCardSkeleton,
} from "../shared/GoodPracticeCard.js";
import useSwr from "swr";
import { MacroCategoryIdFilter } from "./MacroCategoryIdFilter.jsx";
import { apiService } from "../../services/api.services";
import { parseAsString, useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";
import type { MacroCategory } from "../../types/collectionTypes.js";

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
      return apiService.getGoodPractices({
        locale,
        macroCategoryId: macroCategoryId ?? undefined,
        limit: 50,
        offset: 0,
      });
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

export const GoodPracticesCatalogSkeleton: React.FC<{
  selectedMacroCategoryId: string | null;
  tenantMacrocategories: MacroCategory[];
}> = ({ selectedMacroCategoryId, tenantMacrocategories }) => {
  return (
    <div className="row">
      <div className="col-4 d-none d-lg-block">
        <MacroCategoryIdFilter
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
