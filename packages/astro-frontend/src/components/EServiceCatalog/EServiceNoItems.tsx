import { useCatalogTranslations } from "../../i18n/catalog.i18n";
import { getLangFromUrl } from "../../i18n/utils.i18n";

const imageSrc = "/img/024-search.svg";

export const EServiceNoItems: React.FC = () => {
  const currentLanguage = getLangFromUrl(window.location.pathname);
  const t = useCatalogTranslations(currentLanguage);
  return (
    <div className="d-flex justify-content-center p-2 p-sm-5 mt-5">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={imageSrc}
          alt="no-results"
          role="presentation"
          width="96"
          height="96"
        />
        <h3 className="it-card-title px-0 text-primary">
          {t("no-results.title")}
        </h3>
        <div className="it-card-body px-0">
          <p className="it-card-text text-center">
            {t("no-results.description")}
          </p>
        </div>
      </div>
    </div>
  );
};
