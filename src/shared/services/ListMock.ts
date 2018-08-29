import { SearchTemplateId } from './SpSearchConfig';
import { IListService } from "./IListService";
import { ListItem } from "./ListItem";
import { IPersonaSharedProps } from "office-ui-fabric-react";

const examplePersona: IPersonaSharedProps = {
  imageUrl:
    "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
  imageInitials: "AL",
  text: "Annie Lindqvist",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm"
};

const fakeData: Array<ListItem> = [
  {
    title: "Organisation-1",
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "",
    path: "",
    startdate: "01.01.2018",
    enddate: "01.01.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100001",
    projectsize: "M",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Realisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Organisation-2",
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O2",
    imageUrl: "",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Organisation-3",
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O3",
    imageUrl: "",
    path: "",
    startdate: "25.01.2018",
    enddate: "12.06.2019",
    projectlead: examplePersona,
    projectarea: "HR",
    pspelement: "100000",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "1",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Organisation-4",
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O4",
    imageUrl: "",
    path: "",
    startdate: "15.01.2018",
    enddate: "01.09.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100000",
    projectsize: "M",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Realisierung",
    projectprio: "1",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Organisation-5",
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O5",
    imageUrl: "",
    path: "",
    startdate: "01.01.2018",
    enddate: "01.01.2019",
    projectlead: examplePersona,
    projectarea: "HR",
    pspelement: "100000",
    projectsize: "M",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Konzeption",
    projectprio: "1",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: '"Workspace-1',
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/POWERSHELL.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "org-group",
    taxonomie: "SPFx"
  },
  {
    title: '"Workspace-2',
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/PYTHON.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "org-group",
    taxonomie: "SPFx"
  },
  {
    title: '"Workspace-3',
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/SP.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "org-group",
    taxonomie: "SPFx"
  },
  {
    title: '"Workspace-4',
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/OFFICE365.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "org-group",
    taxonomie: "SPFx"
  },
  {
    title: '"Workspace-5',
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/JAVASCRIPT.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "org-group",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-6",
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/PYTHON.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-7",
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/SP.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-8",
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/OFFICE365.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-9",
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/POWERSHELL.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-10",
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/JAVASCRIPT.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-11",
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/SP.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-12",
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/OFFICE365.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-13",
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/POWERSHELL.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-14",
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/PYTHON.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-15",
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/JAVASCRIPT.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-16",
    description:
      "The General Head of IT Strategy benchmarks business-for-business agilities",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/OFFICE365.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-17",
    description:
      "Whereas synchronized brand values promote strategy formulations",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/POWERSHELL.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-18",
    description:
      "The thinkers/planners benchmark a disciplined growth momentum",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/PYTHON.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  },
  {
    title: "Projekt-19",
    description:
      "We are working hard to reintermediate a competitive advantage, while the gatekeeper straightforwardly identifies barriers to success",
    siteUrl: "https://cloud67.sharepoint.com/sites/dev-g-O1",
    imageUrl: "https://blog.velingeorgiev.com/static/images/SP.png",
    path: "",
    startdate: "20.01.2018",
    enddate: "01.11.2019",
    projectlead: examplePersona,
    projectarea: "IT-Services",
    pspelement: "100020",
    projectsize: "L",
    projectdomain: "Zugang",
    projecttype: "Organisation",
    digitalactionfields: "Customer Experience; Effizienz im Betrieb;",
    projectstage: "Initialisierung",
    projectprio: "2",
    templateid: "ppm-project",
    taxonomie: "SPFx"
  }
];

export class ListMock implements IListService {

  public getFiltered = (filter: string): Promise<ListItem[]> => {
    return new Promise<ListItem[]>((resolve: any) => {
      setTimeout(() => {
        resolve(fakeData);
      }, 1000);
    });
  }

  public getProjects = (): Promise<ListItem[]> => {
    return new Promise<ListItem[]>((resolve: any) => {
      setTimeout(() => {
        resolve(fakeData.filter (
         f =>
            f.templateid != null &&
            f.templateid.toLowerCase().indexOf(SearchTemplateId.Project.toLowerCase()) > -1
        ));
      }, 1000);
    });
  }

  public getGroups = (): Promise<ListItem[]> => {
    return new Promise<ListItem[]>((resolve: any) => {
      setTimeout(() => {
        resolve(fakeData.filter (
         f =>
            f.templateid != null &&
            f.templateid.toLowerCase().indexOf(SearchTemplateId.Group.toLowerCase()) > -1
        ));
      }, 1000);
    });
  }

  public getFirstItem = (): Promise<ListItem[]> => {
    return new Promise<ListItem[]>((resolve: any) => {
      setTimeout(() => {
        resolve(fakeData.slice(0, 1));
      }, 1000);
    });
  }
}
