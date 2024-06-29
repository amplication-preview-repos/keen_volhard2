import { InputJsonValue } from "../../types";

export type PdfUpdateInput = {
  content?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
};
