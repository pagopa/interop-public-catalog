import { Modal, ModalBody, ModalFooter, Button } from "design-react-kit";
import { BootstrapItaliaIcon } from "../shared/BootstrapItaliaIcon";
import { useCatalogTranslations } from "../../i18n/catalog.i18n";
import { useEServiceCatalogContext } from "./EServiceCatalogContext";

type FiltersMobileProps = {
  isOpen: boolean;
  toggleModal: (isOpen: boolean) => void;
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
};
export const FiltersMobile = ({
  isOpen,
  toggleModal,
  children,
  onSubmit,
}: FiltersMobileProps) => {
  const { currentLocale } = useEServiceCatalogContext();
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(e);
    toggleModal(false);
  };
  const t = useCatalogTranslations(currentLocale);
  return (
    <Modal
      className="filters-modal"
      fullscreen
      isOpen={isOpen}
      toggle={() => toggleModal(!isOpen)}
    >
      <div className="d-flex justify-content-between p-4 filters-modal-header">
        <h5 className="align-self-center mt-1">{t("filters.mobile.button")}</h5>
        <a
          onClick={() => toggleModal(!isOpen)}
          className="it-card-link text-primary flex-shrink-0"
          aria-label={t("filters.modal.close")}
        >
          {t("filters.modal.close")}
          <BootstrapItaliaIcon
            aria-hidden="true"
            name="it-close"
            size="sm"
            color="primary"
            padded
          />
        </a>
      </div>
      <ModalBody>{children} </ModalBody>
      <ModalFooter className="filters-modal-footer">
        <Button
          style={{ width: "100%" }}
          color="primary"
          onClick={handleSubmit}
        >
          {t("filters.modal.apply")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
