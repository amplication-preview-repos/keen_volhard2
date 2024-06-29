import { JsonValue } from "type-fest";

export type Pdf = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  owner: string | null;
  title: string | null;
  updatedAt: Date;
};
