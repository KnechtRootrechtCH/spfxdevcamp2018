import * as React from "react";
import { IMetaCardProps } from "./MetaCardProps.types";
import styles from "./MetaCard.module.scss";
import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
  DocumentCard,
} from "office-ui-fabric-react";
import * as strings from "MetaCardStrings";
import { CommonUtils } from "../../../common/CommonUtils";

export default class MetaCard extends React.Component<IMetaCardProps> {

  private _renderFieldCard(
    style: string,
    title: string,
    inputValue: string
  ): JSX.Element {
    if (!CommonUtils.isEmptyString(inputValue)) {
      return (
        <div className={style}><strong>{title}:</strong> {inputValue}</div>
      );
    }
  }

  private _renderField(
    style: string,
    title: string,
    inputValue: string
  ): JSX.Element {
    if (!CommonUtils.isEmptyString(inputValue)) {
      return (
        <tr className={style}>
          <td>{title}:</td>
          <td>{inputValue}</td>
        </tr>
      );
    }
  }

  private _renderFieldProjectLead(
    style: string,
    title: string,
    user: IPersonaSharedProps
  ): JSX.Element {
    const { showPersona } = this.props;

    if (!CommonUtils.isNull(user)) {
      return (
        <tr className={style}>
          <td>{title}:</td>
          <td>
            {showPersona ? (
              <Persona
                imageUrl={user.imageUrl}
                imageInitials={user.imageInitials}
                primaryText={user.text}
                secondaryText={user.secondaryText}
                showSecondaryText={
                  user.secondaryText !== null && user.secondaryText.length > 0
                }
                size={PersonaSize.size24}
                presence={PersonaPresence.none}
              />
            ) : (
              user.text
            )}
          </td>
        </tr>
      );
    }
  }

  private _renderFieldProjectLeadCard(
    style: string,
    title: string,
    user: IPersonaSharedProps
  ): JSX.Element {

    const { showPersona } = this.props;

    if (!CommonUtils.isNull(user)) {
      return (
        <div>
            {showPersona ? (
              <Persona
                imageUrl={user.imageUrl}
                imageInitials={user.imageInitials}
                primaryText={user.text}
                secondaryText={user.secondaryText}
                showSecondaryText={
                  user.secondaryText !== null && user.secondaryText.length > 0
                }
                size={PersonaSize.size24}
                presence={PersonaPresence.none}
              />
            ) : (
              <div className={style}><strong>{title}:</strong> {user.text}</div>
            )}
        </div>
      );
    }
  }

  private _renderFieldDateFromTo(
    style: string,
    title: string,
    from: string,
    to: string
  ): JSX.Element {

    let projectdate;

    if (!CommonUtils.isEmptyString(from) && !CommonUtils.isEmptyString(to)){
      projectdate = <div>{from} - {to}</div>;
    } else if(!CommonUtils.isEmptyString(from)){
      projectdate = <div>{from}</div>;
    } else if(!CommonUtils.isEmptyString(to)){
      projectdate = <div>{to}</div>;
    }

    if (!CommonUtils.isEmptyString(from) && !CommonUtils.isEmptyString(to)) {
      return (
        <tr className={style}>
          <td>{title}:</td>
          <td>
            {projectdate}
          </td>
        </tr>
      );
    }
  }

  private _renderFieldDateFromToCard(
    style: string,
    title: string,
    from: string,
    to: string
  ): JSX.Element {

    let projectdate;

    if (!CommonUtils.isEmptyString(from) && !CommonUtils.isEmptyString(to)){
      projectdate = <div>{from} - {to}</div>;
    } else if(!CommonUtils.isEmptyString(from)){
      projectdate = <div>{from}</div>;
    } else if(!CommonUtils.isEmptyString(to)){
      projectdate = <div>{to}</div>;
    }

    if (!CommonUtils.isEmptyString(from) && !CommonUtils.isEmptyString(to)) {
      return (
        <div className={style}><strong>{title}:</strong> {projectdate}</div>
      );
    }
  }

  private _renderAsCardView(): JSX.Element {

    const { siteTitle, listItem } = this.props;

    return (
    <DocumentCard onClickHref={listItem.path} className="ms-DocumentCardMetaCard">
      <div>
        {this._renderFieldCard(styles.metainfo, strings.SiteNameLabel, siteTitle)}
        {this._renderFieldProjectLeadCard(styles.metainfo, strings.ProjectLeadFieldLabel, listItem.projectlead)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectAreaFieldLabel, listItem.projectarea)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectPspElementFieldLabel, listItem.pspelement)}
        {this._renderFieldDateFromToCard(styles.metainfo, strings.ProjectDateDescriptionFieldLabel, listItem.startdate, listItem.enddate)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectSizeFieldLabel, listItem.projectsize)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectDomainFieldLabel, listItem.projectdomain)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectTypeFieldLabel, listItem.projecttype)}
        {this._renderFieldCard(styles.metainfo, strings.DigitalActionfieldsFieldLabel, listItem.digitalactionfields)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectStageFieldLabel, listItem.projectstage)}
        {this._renderFieldCard(styles.metainfo, strings.ProjectPrioFieldLabel, listItem.projectprio)}
        {this._renderFieldCard(styles.metainfo, strings.TaxonomieFieldLabel, listItem.taxonomie)}
      </div>
    </DocumentCard>
    );
  }

  private _renderAsTableView(): JSX.Element {

    const { siteTitle, listItem } = this.props;

    return (
      <div className={styles.containerCard}>
        <div className={styles.header}>
          <table className="ms-Table">
            <tbody>
              {this._renderField(
                styles.metainfo,
                strings.SiteNameLabel,
                siteTitle
              )}
              {this._renderFieldProjectLead(
                styles.metainfo,
                strings.ProjectLeadFieldLabel,
                listItem.projectlead
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectAreaFieldLabel,
                listItem.projectarea
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectPspElementFieldLabel,
                listItem.pspelement
              )}
              {this._renderFieldDateFromTo(
                styles.metainfo,
                strings.ProjectDateDescriptionFieldLabel,
                listItem.startdate,
                listItem.enddate
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectSizeFieldLabel,
                listItem.projectsize
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectDomainFieldLabel,
                listItem.projectdomain
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectTypeFieldLabel,
                listItem.projecttype
              )}
              {this._renderField(
                styles.metainfo,
                strings.DigitalActionfieldsFieldLabel,
                listItem.digitalactionfields
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectStageFieldLabel,
                listItem.projectstage
              )}
              {this._renderField(
                styles.metainfo,
                strings.ProjectPrioFieldLabel,
                listItem.projectprio
              )}
              {this._renderField(
                styles.metainfo,
                strings.TaxonomieFieldLabel,
                listItem.taxonomie
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  public render(): React.ReactElement<IMetaCardProps> {
    const { showCardView } = this.props;

    if (showCardView) {
      return this._renderAsCardView();
    } else {
      return this._renderAsTableView();
    }
  }
}
