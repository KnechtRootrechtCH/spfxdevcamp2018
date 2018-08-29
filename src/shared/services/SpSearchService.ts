import { ListItem } from "./ListItem";

import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, SearchQuery, SearchResults, SearchQueryBuilder } from "@pnp/sp";
import * as moment from "moment";
import { ISearchService } from "./ISearchService";
import { SpSearchConfig, SearchConfigType } from "./SpSearchConfig";
import { IPersonaSharedProps } from "office-ui-fabric-react";
import { PersonaUtils } from "../../common/PersonaUtils";

export class SpSearchService implements ISearchService {
  constructor(
    private _context: WebPartContext,
  ) {}

  public getFiltered(filter: string): Promise<ListItem[]> {

    return new Promise<ListItem[]>((resolve, reject) => {

      let filterParam = null;

      if (filter === "ppm-project"){
        filterParam = SearchConfigType.Project;
      } else if (filter === "org-group"){
        filterParam = SearchConfigType.Group;
      } else if (filter === "all-sites"){
        filterParam = SearchConfigType.AllSites;
      }

      const _searchQueryProjects = SpSearchConfig.getSearchQuery(filterParam);
      let q = SearchQueryBuilder.create("*", _searchQueryProjects);

      // console.log("SpSearchService : query : " + JSON.stringify(q));

      sp.search(<SearchQuery> q)
      .then((results: SearchResults) => {

        // console.log("getFiltered : results (1) : " + JSON.stringify(results.PrimarySearchResults));

        let items:ListItem[] = [];

        for(let result of results.PrimarySearchResults) {
          items.push(this.buildItem(result));
        }

        // console.log("getFiltered : items (2) : " + JSON.stringify(items));

        resolve(items);
        });
    });

  }


  public getProjects(): Promise<ListItem[]> {

    return new Promise<ListItem[]>((resolve, reject) => {

      const _searchQueryProjects = SpSearchConfig.getSearchQuery(SearchConfigType.Project);
      let q = SearchQueryBuilder.create("*", _searchQueryProjects);

      // console.log("SpSearchService : query : " + JSON.stringify(q));

      sp.search(<SearchQuery> q)
      .then((results: SearchResults) => {

        let items:ListItem[] = [];

        for(let result of results.PrimarySearchResults) {
          items.push(this.buildItem(result));
        }

        resolve(items);
        });
    });

  }
  public getGroups(): Promise<ListItem[]> {

    return new Promise<ListItem[]>((resolve, reject) => {

      const _searchQueryProjects = SpSearchConfig.getSearchQuery(SearchConfigType.Group);
      let q = SearchQueryBuilder.create("*", _searchQueryProjects);

      // console.log("SpSearchService : query : " + JSON.stringify(q));

      sp.search(<SearchQuery> q)
      .then((results: SearchResults) => {

        let items:ListItem[] = [];

        for(let result of results.PrimarySearchResults) {
          items.push(this.buildItem(result));
        }

        resolve(items);
        });
    });

  }

  public getAll = (): Promise<ListItem[]> => {

    return new Promise<ListItem[]>((resolve, reject) => {

      const _searchQueryProjects = SpSearchConfig.getSearchQuery(SearchConfigType.AllSites);
      let q = SearchQueryBuilder.create("*", _searchQueryProjects);

      // console.log("SpSearchService : query : " + JSON.stringify(q));

      sp.search(<SearchQuery> q)
      .then((results: SearchResults) => {

        let items:ListItem[] = [];

        for(let result of results.PrimarySearchResults) {
          items.push(this.buildItem(result));
        }

        resolve(items);
        });
    });

  }

  protected buildItem(searchRow: any): ListItem {

    let dateStart = this.formatDate(searchRow.gwProjectStartOWSDATE);
    let dateEnd = this.formatDate(searchRow.gwProjectEndOWSDATE);
    let area = this.parseTaxonomySearchResultValue(searchRow.owstaxIdgwArea);
    let domain = this.parseTaxonomySearchResultValue(searchRow.owstaxIdgwProjectDomain);
    let digital = this.parseTaxonomySearchResultValue(searchRow.owstaxIdgwDigitalActivity);
    let phase = this.parseTaxonomySearchResultValue(searchRow.owstaxIdgwProjectPhase);
    let projecttype = this.parseTaxonomySearchResultValue(searchRow.owstaxIdgwProjectType);
    let tax = this.parseTaxonomySearchResultValue(searchRow.owstaxIdTaxKeyword);

    // Lead
    let leadData: IPersonaSharedProps = this.convertPerson(searchRow.gwProjectLeadOWSUSER);

    return {
      title: searchRow.Title,
      description: searchRow.gwSiteDescriptionOWSMTXT,
      siteUrl: searchRow.SPSiteURL ? searchRow.SPSiteURL : null,
      path: searchRow.Path ? searchRow.Path : null,
      imageUrl: null,
      startdate: dateStart,
      enddate: dateEnd,
      projectlead: leadData,
      projectarea: area,
      pspelement: searchRow.gwPSPElementOWSTEXT ? searchRow.gwPSPElementOWSTEXT : null,
      projectsize: searchRow.gwProjectSizeOWSCHCS ? searchRow.gwProjectSizeOWSCHCS : null,
      projectdomain: domain,
      projecttype: projecttype,
      digitalactionfields: digital,
      projectstage: phase,
      projectprio: searchRow.gwProjectPrioOWSCHCS,
      templateid: searchRow.gwSiteTemplateIdOWSTEXT,
      taxonomie: tax,
    };
  }

  private convertPerson(person: any): IPersonaSharedProps {

    if (!person){
      return null;
    }

    if (person) {

      let ownerArr = person.split(" | ");

      let email = ownerArr[0];
      let name = ownerArr[1];

      return {
        imageUrl: "",
        imageInitials: PersonaUtils.getInitials(name),
        text: name,
        secondaryText: email,
      };

    } else {
      return null;
    }
  }

      /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    private formatDate(inputValue: string): string {

      if (!inputValue){
        return null;
      }

      const iso8061rgx = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
      const matches = inputValue.match(iso8061rgx);

      let updatedInputValue = inputValue;

      if (matches) {
          matches.map(match => {
              updatedInputValue = updatedInputValue.replace(match, moment(match).format('DD.MM.YYYY'));
          });
      }

      return updatedInputValue;
  }

  private parseTaxonomySearchResultValue(inputValue: string): string{

    if (!inputValue){
      return null;
    }

    let taxValue = {TermSetGuids: [], TermValues: []};
    let parts:string[]  = inputValue.split(';');
    parts.forEach(part => {
       if (part.lastIndexOf("GP0|#", 0) === 0) //term?
       {
        let termGuid = part.replace("GP0|#", "");
           taxValue.TermValues.push({ TermGuid: termGuid});
       }
       else if (part.lastIndexOf("GTSet|#", 0) === 0) //term set?
       {
            taxValue.TermSetGuids.push(part.replace("GTSet|#", ""));
       }
       else if (part.lastIndexOf("L0|#", 0) === 0) //Term with label?
       {
            let termParts = part.replace("L0|#0", "").split('|');
            let termGuid = termParts[0];
            let termLabel = termParts[1];
            let result = taxValue.TermValues.filter(tv => {
                return tv.TermGuid == termGuid;
            });
            if (result.length == 0)
                taxValue.TermValues.push({TermGuid : termGuid, Label : termLabel});
            else
                result[0].Label = termLabel;
        }
    });

    let taxOutpUtLabel = null;
    taxValue.TermValues.forEach(tax => {
      taxOutpUtLabel = tax.Label + ";";
    });

    return taxOutpUtLabel;
  }

}
