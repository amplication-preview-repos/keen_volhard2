import { InputJsonValue } from "../../types";

export type PdfCreateInput = {
  content?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
};
