import { Injectable } from "@nestjs/common";
import { CreatePdfInputDto } from "../pdfManagement/CreatePdfInputDto";
import { PdfOutputDto } from "../pdfManagement/PdfOutputDto";
import { UpdatePdfInputDto } from "../pdfManagement/UpdatePdfInputDto";

@Injectable()
export class PdfManagementService {
  constructor() {}
  async CreateNewPdf(args: CreatePdfInputDto): Promise<PdfOutputDto> {
    throw new Error("Not implemented");
  }
  async CreatePdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeletePdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetPdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ModifyPdf(args: UpdatePdfInputDto): Promise<PdfOutputDto> {
    throw new Error("Not implemented");
  }
  async RetrievePdf(args: string): Promise<PdfOutputDto> {
    throw new Error("Not implemented");
  }
  async UpdatePdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
