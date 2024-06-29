import { SortOrder } from "../../util/SortOrder";

export type PdfOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
