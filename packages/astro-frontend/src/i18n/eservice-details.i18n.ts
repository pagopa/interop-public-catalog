import type { TranslationsMap } from './types.i18n.js'
import { buildUseTranslations } from './utils.i18n.js'

export const eserviceDetails = {
  it: {
    available: 'Disponibile',
    not_available: 'Non disponibile',

    'description_section.title': 'Descrizione',
    producer: 'Erogatore',
    'api_details_section.title': 'Dettaglio API',
    'api_details_section.api_state_label': 'Stato API',
    'api_details_section.api_state_active': 'Attivo',
    'api_details_section.api_state_suspended': 'Sospeso',
    'api_details_section.creation_date_label': 'Data di creazione',
    'api_details_section.last_update_date_label': 'Data di ultima modifica',
    'api_details_section.delegation_label': 'Fruizione tramite delega',
    'api_details_section.delegation_tooltip.title': 'Fruizione tramite delega',
    'api_details_section.delegation_tooltip.content':
      'Se disponibile, puoi delegare un’altra PA a presentare la richiesta di fruizione dell’API per tuo conto.',
    'api_details_section.agreements_label': 'Accettazione automatica della richieste di fruizione',
    'api_details_section.agreements_tooltip.title': 'Accettazione automatica',
    'api_details_section.agreements_tooltip.content':
      'Se disponibile, la tua richiesta di fruizione verrà accettata automaticamente senza dover attendere i tempi di approvazione.',
    'api_details_section.risk_analysis_template_label':
      'Compilazione agevolata dell’analisi del rischio',
    'api_details_section.risk_analysis_template_tooltip.title': 'Compilazione agevolata',
    'api_details_section.risk_analysis_template_tooltip.content':
      'Se disponibile, puoi compilare l’analisi del rischio utilizzando un modello precompilato.',

    'tech_specification_section.title': 'Specifiche tecniche',
    'tech_specification_section.current_version': 'Versione corrente',
    'tech_specification_section.technology': 'Tecnologia',
    'tech_specification_section.delivery_mode': 'Modalità invio dati',
    'tech_specification_section.delivery_mode.deliver': 'E-service che eroga dati',
    'tech_specification_section.delivery_mode.receive': 'E-service che riceve dati',
    'tech_specification_section.signal_hub': 'Signal Hub',

    'attributes_section.title': 'Requisiti di accesso',
    'attributes_section.title_requirements': 'requisiti',
    'attributes_section.no_attributes':
      'L’erogatore non richiede il possesso di attributi per accedere a questa API.',
    'attributes_section.certified_group.title': 'Attributo certificato',
    'attributes_section.certified_group_tooltip.title': 'Attributo certificato',
    'attributes_section.certified_group_tooltip.content':
      'Si tratta di attributi certificati da una fonte autoritativa riconosciuta.',
    'attributes_section.verified_group.title': 'Attributo verificato',
    'attributes_section.verified_group_tooltip.title': 'Attributo verificato',
    'attributes_section.verified_group_tooltip.content':
      'Si tratta di attributi già verificati da altri enti per lo stesso fruitore. L’erogatore, se necessario, può comunque richiederne una nuova verifica.',
    'attributes_section.declared_group.title': 'Attributo dichiarato',
    'attributes_section.declared_group_tooltip.title': 'Attributo dichiarato',
    'attributes_section.declared_group_tooltip.content':
      'Si tratta di attributi dichiarati direttamente dal fruitore, che se ne assume la responsabilità senza validazione da parte di enti terzi.',
    'attributes_section.group_description':
      'Per soddisfare questo requisito, devi possedere almeno uno degli attributi presenti nel gruppo.',
    'attributes_section.group.or': 'oppure',

    'documentation_section.title': 'Documentazione e contatti',
    'documentation_section.access_required':
      'Per accedere alla documentazione è necessario autenticarsi.',
    'documentation_section.access_link': 'Accedi a PDND',

    'implementation_section.title': 'Vuoi implementare questa API?',
    'implementation_section.authentication_link': 'Autenticati sulla PDND',

    'featured_api.title': 'Le altre API erogate da questo ente',
    'signalhub.tooltip.title': 'SIGNAL HUB',
    'signalhub.tooltip.content':
      'Se disponibile, il servizio ti avvisa quando i dati collegati a questa API subiscono variazioni.',
    'stateapi.tooltip.title': 'STATO API',
    'stateapi.tooltip.content':
      'Indica lo stato del servizio su PDND. Può essere Attivo o Sospeso.',
  },
  en: {
    available: 'Available',
    not_available: 'Not available',
    producer: 'Producer',
    'description_section.title': 'Description',

    'api_details_section.title': 'API details',
    'api_details_section.api_state_label': 'API state',
    'api_details_section.api_state_active': 'Active',
    'api_details_section.api_state_suspended': 'Suspended',
    'api_details_section.creation_date_label': 'Creation date',
    'api_details_section.last_update_date_label': 'Last update date',
    'api_details_section.delegation_label': 'Use by delegation',
    'api_details_section.delegation_tooltip.title': 'Use by delegation',
    'api_details_section.delegation_tooltip.content':
      'If available, you can delegate another PA to submit the API usage request on your behalf.',
    'api_details_section.agreements_label': 'Automatic acceptance of agreements',
    'api_details_section.agreements_tooltip.title': 'Automatic acceptance',
    'api_details_section.agreements_tooltip.content':
      'If available, your request will be automatically accepted without having to wait for approval times.',
    'api_details_section.risk_analysis_template_label': 'Risk analysis simplified compilation',
    'api_details_section.risk_analysis_template_tooltip.title': 'Simplified compilation',
    'api_details_section.risk_analysis_template_tooltip.content':
      'If available, you can complete the risk analysis using a pre-filled template.',

    'tech_specification_section.title': 'Technical specifications',
    'tech_specification_section.current_version': 'Current version',
    'tech_specification_section.technology': 'Technology',
    'tech_specification_section.delivery_mode': 'Data sending mode',
    'tech_specification_section.delivery_mode.deliver': 'E-service that provides data',
    'tech_specification_section.delivery_mode.receive': 'E-service that receive data',
    'tech_specification_section.signal_hub': 'Signal Hub',

    'attributes_section.title': 'Access requirements',
    'attributes_section.title_requirements': 'requirements',
    'attributes_section.no_attributes':
      'The provider does not require any attributes to access this API.',
    'attributes_section.certified_group.title': 'Certified attribute',
    'attributes_section.certified_group_tooltip.title': 'Certified attribute',
    'attributes_section.certified_group_tooltip.content':
      'These are attributes certified by a recognized authoritative source.',
    'attributes_section.verified_group.title': 'Verified attribute',
    'attributes_section.verified_group_tooltip.title': 'Verified attribute',
    'attributes_section.verified_group_tooltip.content':
      'These are attributes that have already been verified by other entities for the same user. The provider, if necessary, can request a new verification.',
    'attributes_section.declared_group.title': 'Declared attribute',
    'attributes_section.declared_group_tooltip.title': 'Declared attribute',
    'attributes_section.declared_group_tooltip.content':
      'These are attributes declared directly by the user, who assumes responsibility for them without validation by third parties.',
    'attributes_section.group_description':
      'To meet this requirement, you must possess at least one of the attributes in the group.',
    'attributes_section.group.or': 'or',

    'documentation_section.title': 'Documentation and contacts',
    'documentation_section.access_required': 'To access the documentation you must authenticate.',
    'documentation_section.access_link': 'Access to PDND',

    'implementation_section.title': 'Do you want to implement this API?',
    'implementation_section.authentication_link': 'Authenticate on PDND',

    'featured_api.title': 'Other APIs provided by this organization',
    'signalhub.tooltip.title': 'SIGNAL HUB',
    'signalhub.tooltip.content':
      'If available, the service notifies you when the data linked to this API changes.',
    'stateapi.tooltip.title': 'API STATE',
    'stateapi.tooltip.content':
      'Indicates the service status on PDND. It can be Active or Suspended.',
  },
} as const satisfies TranslationsMap

export const useEServiceDetailsTranslations = buildUseTranslations(eserviceDetails)
