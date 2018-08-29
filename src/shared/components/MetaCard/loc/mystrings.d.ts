declare interface IMetaCardStrings {
  TitleFieldLabel: string;
  DescriptionFieldLabel: string;
  ProjectLeadFieldLabel: string;
  ProjectAreaFieldLabel: string;
  ProjectPspElementFieldLabel: string;
  ProjectDateDescriptionFieldLabel: string;
  TaxonomieFieldLabel: string;
  ProjectTypeFieldLabel: string;
  ProjectPrioFieldLabel: string;
  ProjectStageFieldLabel: string;
  ProjectDomainFieldLabel: string;
  DigitalActionfieldsFieldLabel: string;
  ProjectSizeFieldLabel: string;
  TemplateIdFieldLabel: string;
  SiteNameLabel: string;
}

declare module 'MetaCardStrings' {
  const strings: IMetaCardStrings;
  export = strings;
}
