import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from 'design-react-kit'
import { BootstrapItaliaIcon } from '../shared/BootstrapItaliaIcon'
import { useUiTranslations } from '../../i18n/ui.i18n'
import { getLangFromUrl } from '../../i18n/utils.i18n'

type FiltersMobileProps = {
  isOpen: boolean
  toggleModal: (isOpen: boolean) => void
  children?: React.ReactNode
}
export const FiltersMobile = ({ isOpen, toggleModal, children }: FiltersMobileProps) => {
  const t = useUiTranslations(getLangFromUrl(window.location.pathname))
  return (
    <Modal className="filters-modal" fullscreen isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
      <div className="d-flex justify-content-end p-4 filters-modal-header">
        <a
          onClick={() => toggleModal(!isOpen)}
          className="it-card-link text-primary flex-shrink-0"
          aria-label={t('modal.close')}
        >
          {t('modal.close')}
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
        <Button style={{ width: '100%' }} color="primary" onClick={() => toggleModal(!isOpen)}>
          {t('modal.apply')}
        </Button>
      </ModalFooter>
    </Modal>
  )
}
