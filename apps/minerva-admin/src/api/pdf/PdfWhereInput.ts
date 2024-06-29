import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PdfWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
};
