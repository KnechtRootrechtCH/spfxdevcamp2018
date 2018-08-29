import { ListItem } from "../../services/ListItem";

export interface IMetaCardProps {
  key: number;
  listItem: ListItem;
  showPersona? : boolean;
  showCardView?: boolean;
  siteTitle: string;
}
