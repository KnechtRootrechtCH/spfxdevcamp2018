import { ListItem } from "./ListItem";

export interface ISearchService {
  getAll(): Promise<Array<ListItem>>;
  getFiltered(filter: string): Promise<Array<ListItem>>;
  getProjects(): Promise<Array<ListItem>>;
  getGroups(): Promise<Array<ListItem>>;
}
