import { Pdf as TPdf } from "../api/pdf/Pdf";

export const PDF_TITLE_FIELD = "title";

export const PdfTitle = (record: TPdf): string => {
  return record.title?.toString() || String(record.id);
};
