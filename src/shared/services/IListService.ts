import { ListItem } from "./ListItem";

export interface IListService {
  getFirstItem(): Promise<Array<ListItem>>;
  getFiltered(filter: string): Promise<Array<ListItem>>;
  getProjects(): Promise<Array<ListItem>>;
  getGroups(): Promise<Array<ListItem>>;
}
