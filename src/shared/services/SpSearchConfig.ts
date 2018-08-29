import {SearchQuery, Sort, SortDirection} from "@pnp/sp";

export enum SearchConfigType {
  Group = 1,
  Project = 2,
  ModernSites = 3,
  TeamSite = 4,
  AllSites = 5
}

export enum SearchTemplateId {
  AllSites = "",
  Project = "ppm-project",
  Group = "org-group"
}

export class SpSearchConfig {

  private static getQueryAllTemplateTypes(inputvalue : string) : string {
    if(!inputvalue) {
      return null;
    }

    let avaibleTemplates = inputvalue;
    let stringQuery: string = "";
    let filters: string[] = [];

    filters = avaibleTemplates.split(";");

    let i: number = filters.length;
    let counter: number = 1;

    stringQuery = "(";
    filters.forEach(ele => {
      if (counter === i) {
        stringQuery += "gwSiteTemplateIdOWSTEXT:" + ele + ")";
      } else {
        stringQuery += "gwSiteTemplateIdOWSTEXT:" + ele + " OR ";
      }
      counter++;
    });

    return stringQuery;
  }

  public static getSearchQuery(type : SearchConfigType) : SearchQuery {
    const requestListUrl = "https://cloud67.sharepoint.com/Lists/SiteRequests/*";

    let queryTemplate: string = this.getQueryAllTemplateTypes("org-group;ppm-project");
    let queryTemplateProjects: string = this.getQueryAllTemplateTypes("ppm-project");
    let queryTemplateGroups: string = this.getQueryAllTemplateTypes("org-group");

    let queryContentTypeId: string = " AND ContentTypeId:0x0100AD911DC115B64D77B477D5B723182C50*";
    let queryPath: string = " AND -Path:" + requestListUrl;

    let queryTempalteAllSites = queryTemplate + queryContentTypeId + queryPath;
    let queryProjects = queryTemplateProjects + queryContentTypeId + queryPath;
    let queryGroups = queryTemplateGroups + queryContentTypeId + queryPath;

    let query: SearchQuery = null;

    let sortList: Sort[] = [
      {
        Property: "Created",
        Direction: SortDirection.Descending
      }, {
        Property: "Size",
        Direction: SortDirection.Ascending
      }
    ];

    let selectedProperties: string[] = [
      "Path",
      "Url",
      "Title",
      "Author",
      "Write",
      "ServerRedirectedEmbedURL",
      "WorkId",
      "SPSiteURL",
      "gwSiteDescriptionOWSMTXT",
      "gwProjectLeadOWSUSER",
      "gwPSPElementOWSTEXT",
      "gwProjectSizeOWSCHCS",
      "gwProjectStartOWSDATE",
      "gwProjectEndOWSDATE",
      "owstaxIdgwArea",
      "owstaxIdTaxKeyword",
      "owstaxIdgwDigitalActivity",
      "owstaxIdgwProjectDomain",
      "owstaxIdgwProjectPhase",
      "owstaxIdgwProjectType",
      "gwProjectPrioOWSCHCS",
      "owstaxIdgwSiteStatus",
      "gwSiteTemplateIdOWSTEXT"
    ];

    if (type === SearchConfigType.Group) {
      // all gwWorkspaces
      const searchQueryWorkspaces : SearchQuery = {
        TrimDuplicates: false,
        QueryTemplate: queryGroups,
        RowLimit: 50,
        SortList: sortList,
        SelectProperties: selectedProperties,
        ClientType: "ContentSearchRegular"
      };

      query = searchQueryWorkspaces;
    } else if (type === SearchConfigType.Project) {
      // all gwProjects
      const searchQueryProjects : SearchQuery = {
        TrimDuplicates: false,
        QueryTemplate: queryProjects,
        RowLimit: 50,
        SortList: sortList,
        SelectProperties: selectedProperties,
        ClientType: "ContentSearchRegular"
      };

      query = searchQueryProjects;
    } else if (type === SearchConfigType.ModernSites) {
      // all modern sites
      const searchQueryModernSite : SearchQuery = {
        TrimDuplicates: false,
        QueryTemplate: "contentclass:STS_Site AND (SiteTemplateId:64 OR SiteTemplateId:68) AND -Path:" + requestListUrl + "*",
        RowLimit: 50,
        SortList: sortList,
        SelectProperties: [
          "Title",
          "Path",
          "SPWebUrl",
          "SiteTemplateId",
          "SiteTemplate",
          "contentclass"
        ],
        Properties: [
          {
            Name: "EnableDynamicGroups",
            Value: {
              BoolVal: true,
              QueryPropertyValueTypeIndex: 3
            }
          }
        ]
      };

      query = searchQueryModernSite;
    } else if (type === SearchConfigType.TeamSite) {
      // all modern team sites
      const searchQueryModernTeamSite : SearchQuery = {
        TrimDuplicates: false,
        QueryTemplate: "contentclass:STS_Site AND SiteTemplateId:64 AND -Path:" + requestListUrl + "*",
        RowLimit: 50,
        SortList: sortList,
        SelectProperties: [
          "Title",
          "Path",
          "SPWebUrl",
          "SiteTemplateId",
          "SiteTemplate",
          "contentclass"
        ],
        Properties: [
          {
            Name: "EnableDynamicGroups",
            Value: {
              BoolVal: true,
              QueryPropertyValueTypeIndex: 3
            }
          }
        ]
      };

      query = searchQueryModernTeamSite;
    } else if (type === SearchConfigType.AllSites) {
      // all Sites
      const searchQueryProjects : SearchQuery = {
        TrimDuplicates: false,
        QueryTemplate: queryTempalteAllSites,
        RowLimit: 50,
        SortList: sortList,
        SelectProperties: selectedProperties,
        ClientType: "ContentSearchRegular"
      };

      query = searchQueryProjects;
    }

    return query;
  }
}
