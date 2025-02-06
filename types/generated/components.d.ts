import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageAboutBrand extends Struct.ComponentSchema {
  collectionName: 'components_about_page_about_brands';
  info: {
    displayName: 'AboutBrand';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    TabName: Schema.Attribute.String;
  };
}

export interface AboutPageCertificate extends Struct.ComponentSchema {
  collectionName: 'components_about_page_certificates';
  info: {
    displayName: 'Certificate';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutPageVissionMissionArge extends Struct.ComponentSchema {
  collectionName: 'components_about_page_vission_mission_arges';
  info: {
    displayName: 'VissionMissionArge';
  };
  attributes: {
    ArgeDescription: Schema.Attribute.Blocks;
    ArgeImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ArgeTitle: Schema.Attribute.String;
    VissionMissionDescription: Schema.Attribute.Blocks;
    VissionMissionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    VissionMissionTitle: Schema.Attribute.String;
  };
}

export interface AboutPageWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_about_page_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
  };
  attributes: {
    Description1: Schema.Attribute.Blocks;
    Description2: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface AboutPageWhoAreWe extends Struct.ComponentSchema {
  collectionName: 'components_about_page_who_are_wes';
  info: {
    displayName: 'WhoAreWe';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface BlogContentBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_blog_contents';
  info: {
    displayName: 'BlogContent';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface BlogContentBlogImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_blog_images';
  info: {
    displayName: 'BlogImage';
  };
  attributes: {
    Caption: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogContentBlogtwocolContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_blogtwocol_contents';
  info: {
    displayName: 'BlogtwocolContent';
  };
  attributes: {
    BlogtwocolImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    BlogtwocolText: Schema.Attribute.Blocks;
  };
}

export interface BrandsBrands extends Struct.ComponentSchema {
  collectionName: 'components_brands_brands';
  info: {
    displayName: 'Brands';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CatalogCatalog extends Struct.ComponentSchema {
  collectionName: 'components_catalog_catalogs';
  info: {
    displayName: 'Catalog';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CounterSectionCounterItem extends Struct.ComponentSchema {
  collectionName: 'components_counter_section_counter_items';
  info: {
    displayName: 'CounterItem';
  };
  attributes: {
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
    Value: Schema.Attribute.BigInteger;
  };
}

export interface CounterSectionCounterSection extends Struct.ComponentSchema {
  collectionName: 'components_counter_section_counter_sections';
  info: {
    displayName: 'CounterSection';
  };
  attributes: {
    CounterItem: Schema.Attribute.Component<
      'counter-section.counter-item',
      true
    >;
    Description: Schema.Attribute.Blocks;
    Link1: Schema.Attribute.String;
    Link2: Schema.Attribute.String;
  };
}

export interface FeaturesItemsMediumVoltageFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_features_items_medium_voltage_features';
  info: {
    displayName: 'MediumVoltageFeatures';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    Address: Schema.Attribute.Blocks;
    Link: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GeneratorTabsGeneratorTabs extends Struct.ComponentSchema {
  collectionName: 'components_generator_tabs_generator_tabs';
  info: {
    displayName: 'GeneratorTabs';
  };
  attributes: {
    TabImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    TabKey: Schema.Attribute.String;
    TableRows: Schema.Attribute.Component<'generator-tabs.table-rows', true>;
    TabName: Schema.Attribute.String;
  };
}

export interface GeneratorTabsTableRows extends Struct.ComponentSchema {
  collectionName: 'components_generator_tabs_table_rows';
  info: {
    description: '';
    displayName: 'TableRows';
  };
  attributes: {
    BirincilGuc: Schema.Attribute.String;
    Content: Schema.Attribute.Blocks;
    DetayLink: Schema.Attribute.String;
    Hz: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    KatalogLink: Schema.Attribute.String;
    Model: Schema.Attribute.String;
    YedekGuc: Schema.Attribute.String;
  };
}

export interface HeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    HeroItem: Schema.Attribute.Component<'hero-section.items', true>;
    MainTitle: Schema.Attribute.String;
  };
}

export interface HeroSectionItems extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_items';
  info: {
    description: '';
    displayName: 'Items';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface OuterFuelTankOuterFuelTank extends Struct.ComponentSchema {
  collectionName: 'components_outer_fuel_tank_outer_fuel_tanks';
  info: {
    displayName: 'OuterFuelTank';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface PanelItemsPanelItems extends Struct.ComponentSchema {
  collectionName: 'components_panel_items_panel_items';
  info: {
    displayName: 'PanelItems';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface SeismicVibrationPageSeismicVibrationPage
  extends Struct.ComponentSchema {
  collectionName: 'components_seismic_vibration_page_seismic_vibration_pages';
  info: {
    displayName: 'SeismicVibrationPage';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ServicesSectionServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_services_section_services_sections';
  info: {
    displayName: 'ServicesSection';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SoundProofGeneratorGeneratorData
  extends Struct.ComponentSchema {
  collectionName: 'components_sound_proof_generator_generator_data';
  info: {
    displayName: 'GeneratorData';
  };
  attributes: {
    Dimensions: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SoundProofGeneratorGeneratorFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_sound_proof_generator_generator_features';
  info: {
    displayName: 'GeneratorFeature';
  };
  attributes: {
    Feature: Schema.Attribute.String;
  };
}

export interface SoundProofGeneratorSoundProofFeaturItems
  extends Struct.ComponentSchema {
  collectionName: 'components_sound_proof_generator_sound_proof_featur_items';
  info: {
    displayName: 'SoundProofFeaturItems';
  };
  attributes: {
    FeatureName: Schema.Attribute.String;
  };
}

export interface SoundProofGeneratorSoundProofFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_sound_proof_generator_sound_proof_features';
  info: {
    displayName: 'SoundProofFeatures';
  };
  attributes: {
    FeaturesImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FeaturesTitle: Schema.Attribute.String;
    SoundProofFeaturItems: Schema.Attribute.Component<
      'sound-proof-generator.sound-proof-featur-items',
      true
    >;
  };
}

export interface SoundProofGeneratorSoundProofGenerator
  extends Struct.ComponentSchema {
  collectionName: 'components_sound_proof_generator_sound_proof_generators';
  info: {
    displayName: 'SoundProofGenerator';
  };
  attributes: {
    GeneratorDataDescription: Schema.Attribute.Component<
      'sound-proof-generator.generator-data',
      true
    >;
    GeneratorDataFeatures: Schema.Attribute.Component<
      'sound-proof-generator.generator-feature',
      true
    >;
    SoundProofGeneratorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface VaultageFeaturesFeaturesRight extends Struct.ComponentSchema {
  collectionName: 'components_vaultage_features_features_rights';
  info: {
    displayName: 'FeaturesRight';
  };
  attributes: {
    FeatureName: Schema.Attribute.String;
  };
}

export interface VaultageFeaturesVaultageFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_vaultage_features_vaultage_features';
  info: {
    displayName: 'VaultageFeatures';
  };
  attributes: {
    FeaturesHeadRight: Schema.Attribute.Blocks;
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.about-brand': AboutPageAboutBrand;
      'about-page.certificate': AboutPageCertificate;
      'about-page.vission-mission-arge': AboutPageVissionMissionArge;
      'about-page.what-we-do': AboutPageWhatWeDo;
      'about-page.who-are-we': AboutPageWhoAreWe;
      'blog-content.blog-content': BlogContentBlogContent;
      'blog-content.blog-image': BlogContentBlogImage;
      'blog-content.blogtwocol-content': BlogContentBlogtwocolContent;
      'brands.brands': BrandsBrands;
      'catalog.catalog': CatalogCatalog;
      'counter-section.counter-item': CounterSectionCounterItem;
      'counter-section.counter-section': CounterSectionCounterSection;
      'features-items.medium-voltage-features': FeaturesItemsMediumVoltageFeatures;
      'footer.footer': FooterFooter;
      'generator-tabs.generator-tabs': GeneratorTabsGeneratorTabs;
      'generator-tabs.table-rows': GeneratorTabsTableRows;
      'hero-section.hero-section': HeroSectionHeroSection;
      'hero-section.items': HeroSectionItems;
      'outer-fuel-tank.outer-fuel-tank': OuterFuelTankOuterFuelTank;
      'panel-items.panel-items': PanelItemsPanelItems;
      'seismic-vibration-page.seismic-vibration-page': SeismicVibrationPageSeismicVibrationPage;
      'services-section.services-section': ServicesSectionServicesSection;
      'sound-proof-generator.generator-data': SoundProofGeneratorGeneratorData;
      'sound-proof-generator.generator-feature': SoundProofGeneratorGeneratorFeature;
      'sound-proof-generator.sound-proof-featur-items': SoundProofGeneratorSoundProofFeaturItems;
      'sound-proof-generator.sound-proof-features': SoundProofGeneratorSoundProofFeatures;
      'sound-proof-generator.sound-proof-generator': SoundProofGeneratorSoundProofGenerator;
      'vaultage-features.features-right': VaultageFeaturesFeaturesRight;
      'vaultage-features.vaultage-features': VaultageFeaturesVaultageFeatures;
    }
  }
}
