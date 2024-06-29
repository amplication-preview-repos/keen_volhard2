import * as graphql from "@nestjs/graphql";
import { CreatePdfInputDto } from "../pdfManagement/CreatePdfInputDto";
import { PdfOutputDto } from "../pdfManagement/PdfOutputDto";
import { UpdatePdfInputDto } from "../pdfManagement/UpdatePdfInputDto";
import { PdfManagementService } from "./pdfmanagement.service";

export class PdfManagementResolver {
  constructor(protected readonly service: PdfManagementService) {}

  @graphql.Mutation(() => PdfOutputDto)
  async CreateNewPdf(
    @graphql.Args()
    args: CreatePdfInputDto
  ): Promise<PdfOutputDto> {
    return this.service.CreateNewPdf(args);
  }

  @graphql.Query(() => String)
  async CreatePdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePdf(args);
  }

  @graphql.Mutation(() => String)
  async DeletePdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeletePdf(args);
  }

  @graphql.Query(() => String)
  async GetPdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetPdf(args);
  }

  @graphql.Mutation(() => PdfOutputDto)
  async ModifyPdf(
    @graphql.Args()
    args: UpdatePdfInputDto
  ): Promise<PdfOutputDto> {
    return this.service.ModifyPdf(args);
  }

  @graphql.Query(() => PdfOutputDto)
  async RetrievePdf(
    @graphql.Args()
    args: string
  ): Promise<PdfOutputDto> {
    return this.service.RetrievePdf(args);
  }

  @graphql.Query(() => String)
  async UpdatePdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdatePdf(args);
  }
}
