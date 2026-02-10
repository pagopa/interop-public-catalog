import type { Schema, Struct } from '@strapi/strapi';

export interface CatalogLinks extends Struct.ComponentSchema {
  collectionName: 'components_catalog_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    SingleLink: Schema.Attribute.Component<'catalog.single-link', false>;
    Title: Schema.Attribute.String;
  };
}

export interface CatalogSingleLink extends Struct.ComponentSchema {
  collectionName: 'components_catalog_single_links';
  info: {
    displayName: 'SingleLink';
  };
  attributes: {
    LinkLabel: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
  };
}

export interface EsempiPraticiExample extends Struct.ComponentSchema {
  collectionName: 'components_esempi_pratici_examples';
  info: {
    displayName: 'Example';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface EsempiPraticiImage extends Struct.ComponentSchema {
  collectionName: 'components_esempi_pratici_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface EsempiPraticiRelatedEservices extends Struct.ComponentSchema {
  collectionName: 'components_esempi_pratici_related_eservices';
  info: {
    displayName: 'RelatedEservices';
  };
  attributes: {
    EserviceId: Schema.Attribute.String;
  };
}

export interface EsempiPraticiSimpleDescription extends Struct.ComponentSchema {
  collectionName: 'components_esempi_pratici_simple_descriptions';
  info: {
    displayName: 'SimpleDescription';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface EsempiPraticiTechnicalNotes extends Struct.ComponentSchema {
  collectionName: 'components_esempi_pratici_technical_notes';
  info: {
    displayName: 'TechnicalNotes';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface FaqSectionFaqSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_section_faq_section_items';
  info: {
    displayName: 'SectionItem';
  };
  attributes: {
    FAQAnswer: Schema.Attribute.Blocks;
    FAQQuestion: Schema.Attribute.String;
  };
}

export interface FaqSectionSection extends Struct.ComponentSchema {
  collectionName: 'components_faq_section_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    FAQSectionItem: Schema.Attribute.Component<
      'faq-section.faq-section-item',
      true
    >;
    FAQSectionTitle: Schema.Attribute.String;
  };
}

export interface GeneralFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_general_footer_links';
  info: {
    displayName: 'FooterLinks';
  };
  attributes: {
    pagines: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    RowTitle: Schema.Attribute.String;
  };
}

export interface GeneralHowTo extends Struct.ComponentSchema {
  collectionName: 'components_general_how_tos';
  info: {
    displayName: 'HowTo';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Illustration: Schema.Attribute.Media<'images' | 'files'>;
    IsLinkInternal: Schema.Attribute.Boolean;
    LinkLabel: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GeneralHowToSection extends Struct.ComponentSchema {
  collectionName: 'components_general_how_to_sections';
  info: {
    displayName: 'HowToSection';
  };
  attributes: {
    HowTo: Schema.Attribute.Component<'general.how-to', true>;
    Title: Schema.Attribute.String;
  };
}

export interface GeneralWasPageUseful extends Struct.ComponentSchema {
  collectionName: 'components_general_was_page_usefuls';
  info: {
    displayName: 'WasPageUseful';
  };
  attributes: {
    EmailLabel: Schema.Attribute.String;
    EmailMailTo: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageEservices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_eservices';
  info: {
    displayName: 'Eservices';
  };
  attributes: {
    EServiceId: Schema.Attribute.String;
  };
}

export interface HomepageExamples extends Struct.ComponentSchema {
  collectionName: 'components_homepage_examples';
  info: {
    displayName: 'Examples';
  };
  attributes: {
    Description: Schema.Attribute.String;
    esempi_praticis: Schema.Attribute.Relation<
      'oneToMany',
      'api::esempio-pratico.esempio-pratico'
    >;
    macrocategories: Schema.Attribute.Relation<
      'oneToMany',
      'api::macrocategory.macrocategory'
    >;
    SeeAllExamplesLinkLabel: Schema.Attribute.String;
    SeeAllExamplesLinkURL: Schema.Attribute.String;
    SeeAllMacrocategoriesLinkLabel: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    APIQuestion: Schema.Attribute.String;
    APITooltipDescription: Schema.Attribute.String;
    APITooltipTitle: Schema.Attribute.String;
    Illustration: Schema.Attribute.Media<'images' | 'files'>;
    InputPlaceholderText: Schema.Attribute.String;
    ScrollDownLabel: Schema.Attribute.String;
    SearchButtonLabel: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_it_works';
  info: {
    displayName: 'HowItWorks';
  };
  attributes: {
    HowItWorksItem: Schema.Attribute.Component<
      'homepage.how-it-works-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageHowItWorksItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_it_works_items';
  info: {
    displayName: 'HowItWorksItem';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Illustration: Schema.Attribute.Media<'images' | 'files'>;
    IsLinkInternal: Schema.Attribute.Boolean;
    LinkLabel: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomepageMacrocategories extends Struct.ComponentSchema {
  collectionName: 'components_homepage_macrocategories';
  info: {
    displayName: 'Macrocategories';
  };
  attributes: {
    macrocategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::macrocategory.macrocategory'
    >;
  };
}

export interface HomepageShowcaseEservices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_showcase_eservices';
  info: {
    displayName: 'ShowcaseEservices';
  };
  attributes: {
    EServices: Schema.Attribute.Component<'homepage.eservices', true>;
    LinkLabel: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilityFeatures extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilityInteroperabilityLevels
  extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_interoperability_levels';
  info: {
    displayName: 'InteroperabilityLevels';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    SingleInteroperabilityLevel: Schema.Attribute.Component<
      'interoperability.single-interoperability-level',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilityLegislation extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_legislations';
  info: {
    displayName: 'Legislation';
  };
  attributes: {
    LinkLabel: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilitySingleInteroperabilityLevel
  extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_single_interoperability_levels';
  info: {
    displayName: 'SingleInteroperabilityLevel';
  };
  attributes: {
    Illustration: Schema.Attribute.Media<'images' | 'files'>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilitySingleTool extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_single_tools';
  info: {
    displayName: 'SingleTool';
  };
  attributes: {
    Description: Schema.Attribute.String;
    LinkURL: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InteroperabilityTools extends Struct.ComponentSchema {
  collectionName: 'components_interoperability_tools';
  info: {
    displayName: 'Tools';
  };
  attributes: {
    LinkLabel: Schema.Attribute.String;
    SingleTool: Schema.Attribute.Component<
      'interoperability.single-tool',
      true
    >;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    UsageLabel: Schema.Attribute.String;
  };
}

export interface NormativaSectionNormativaSection
  extends Struct.ComponentSchema {
  collectionName: 'components_normativa_section_normativa_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    NormativaSectionItem: Schema.Attribute.Component<
      'normativa-section.section-item',
      true
    >;
    NormativaSectionTitle: Schema.Attribute.String;
  };
}

export interface NormativaSectionSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_normativa_section_section_items';
  info: {
    displayName: 'SectionItem';
  };
  attributes: {
    NormativaSectionItemDescription: Schema.Attribute.Blocks;
    NormativaSectionItemLink: Schema.Attribute.String;
    NormativaSectionItemTitle: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    MetaDescription: Schema.Attribute.String;
    MetaTitle: Schema.Attribute.String;
    OpenGraphImage: Schema.Attribute.Media<'images' | 'files'>;
    TwitterImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'catalog.links': CatalogLinks;
      'catalog.single-link': CatalogSingleLink;
      'esempi-pratici.example': EsempiPraticiExample;
      'esempi-pratici.image': EsempiPraticiImage;
      'esempi-pratici.related-eservices': EsempiPraticiRelatedEservices;
      'esempi-pratici.simple-description': EsempiPraticiSimpleDescription;
      'esempi-pratici.technical-notes': EsempiPraticiTechnicalNotes;
      'faq-section.faq-section-item': FaqSectionFaqSectionItem;
      'faq-section.section': FaqSectionSection;
      'general.footer-links': GeneralFooterLinks;
      'general.how-to': GeneralHowTo;
      'general.how-to-section': GeneralHowToSection;
      'general.was-page-useful': GeneralWasPageUseful;
      'homepage.eservices': HomepageEservices;
      'homepage.examples': HomepageExamples;
      'homepage.hero': HomepageHero;
      'homepage.how-it-works': HomepageHowItWorks;
      'homepage.how-it-works-item': HomepageHowItWorksItem;
      'homepage.macrocategories': HomepageMacrocategories;
      'homepage.showcase-eservices': HomepageShowcaseEservices;
      'interoperability.features': InteroperabilityFeatures;
      'interoperability.interoperability-levels': InteroperabilityInteroperabilityLevels;
      'interoperability.legislation': InteroperabilityLegislation;
      'interoperability.single-interoperability-level': InteroperabilitySingleInteroperabilityLevel;
      'interoperability.single-tool': InteroperabilitySingleTool;
      'interoperability.tools': InteroperabilityTools;
      'normativa-section.normativa-section': NormativaSectionNormativaSection;
      'normativa-section.section-item': NormativaSectionSectionItem;
      'seo.seo': SeoSeo;
    }
  }
}
