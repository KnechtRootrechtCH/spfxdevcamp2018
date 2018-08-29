import {ListItem} from "./ListItem";
import {IListService} from "./IListService";

import {WebPartContext} from "@microsoft/sp-webpart-base";
import {Web, CamlQuery} from "@pnp/sp";
import * as moment from "moment";
import {IPersonaSharedProps} from "office-ui-fabric-react";
import { PersonaUtils } from "../../common/PersonaUtils";

export class SpListService implements IListService {

  constructor(private _context : WebPartContext, private _listName : string) {}

  public getFiltered(filter : string) : Promise < ListItem[] > {
    throw new Error("Method not implemented.");
  }
  public getProjects() : Promise < ListItem[] > {
    throw new Error("Method not implemented.");
  }
  public getGroups() : Promise < ListItem[] > {
    throw new Error("Method not implemented.");
  }

  /**
   * Get the first row in from the list. Use renderListDataAsStream() API function to get all metadata fields.
   */
  public getFirstItem = () : Promise < ListItem[] > => {
    return new Promise < ListItem[] > ((resolve, reject) => {
      let web : Web = new Web(this._context.pageContext.web.absoluteUrl);

      const xml = "<View><Query><OrderBy><FieldRef Name='Title' /></OrderBy></Query><RowLimit>1</Ro" +
          "wLimit></View>";

      const q : CamlQuery = {
        ViewXml: xml
      };

      web
        .lists
        .getByTitle(this._listName)
        .renderListDataAsStream(q)
        .then((data : any) => {

          if (data && data.Row && data.Row.length > 0) {

            let outData : ListItem[] = [];

            console.log("getFirstItem : Test1 : " + JSON.stringify(data.Row));

            data
              .Row
              .forEach((element : any) => {
                let tempItem : ListItem = convertItem(element);
                outData.push(tempItem);
              });

            // console.log("getFirstItem : Test2 : " + JSON.stringify(data.Row));

            resolve(outData);
          }
        })
        .catch((error : any) => {
          console.log("getFirstItem : " + error);
          reject(error);
        });
    });
  }
}

function convertItem(element : any) : ListItem {
  // Multi Value Field
  let outDigtial: string = "";
  if (element.gwDigitalActivity && element.gwDigitalActivity.length > 0) {
    let digital : any = element.gwDigitalActivity;
    digital.forEach(el => {
      outDigtial += el.Label + ";";
    });
  }

  // Multi Value Field
  let outTaxonomie: string = "";
  if (element.TaxKeyword && element.TaxKeyword.length > 0) {
    let taxArray : any = element.TaxKeyword;
    taxArray.forEach(el => {
      outTaxonomie += el.Label + ";";
    });
  }

  // Date Field
  let outProjectStart: string = "";
  if (element.gwProjectStart !== null) {
    outProjectStart = moment(element.gwProjectStart).format('DD.MM.YYYY');
  }

  // Date Field
  let outProjectEnd: string = "";
  if (element.gwProjectEnd !== null) {
    outProjectEnd = moment(element.gwProjectEnd).format('DD.MM.YYYY');
  }

  // Lead
  let outUserData: IPersonaSharedProps = convertPerson(element.gwProjectLead[0]);

  return {
    title: element.Title,
    description: element.gwSiteDescription,
    siteUrl: "",
    path: "",
    imageUrl: "",
    startdate: outProjectStart,
    enddate: outProjectEnd,
    projectlead: outUserData
      ? outUserData
      : null,
    projectarea: element.gwArea
      ? element.gwArea.Label
      : "",
    pspelement: element.gwPSPElement,
    projectsize: element.gwProjectSize,
    projectdomain: element.gwProjectDomain
      ? element.gwProjectDomain.Label
      : "",
    projecttype: element.gwProjectType
      ? element.gwProjectType.Label
      : "",
    digitalactionfields: outDigtial,
    projectstage: element.gwProjectPhase
      ? element.gwProjectPhase.Label
      : "",
    projectprio: element.gwProjectPrio,
    templateid: element.gwSiteTemplateId,
    taxonomie: outTaxonomie
  };
}

function convertPerson(element : any) : IPersonaSharedProps {

  return {
    imageUrl: element.picture,
    imageInitials: PersonaUtils.getInitials(element.title),
    text: element.title,
    secondaryText: element.email,
    tertiaryText: element.jobTitle,
    optionalText: element.department
  };

}
