import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PdfManagementService } from "./pdfmanagement.service";
import { PdfOutputDto } from "../pdfManagement/PdfOutputDto";

@swagger.ApiTags("pdfManagements")
@common.Controller("pdfManagements")
export class PdfManagementController {
  constructor(protected readonly service: PdfManagementService) {}

  @common.Post("/pdfs")
  @swagger.ApiOkResponse({
    type: PdfOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewPdf(
    @common.Body()
    body: string
  ): Promise<PdfOutputDto> {
        return this.service.CreateNewPdf(body);
      }

  @common.Get("/:id/create-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreatePdf(body);
      }

  @common.Delete("/pdfs/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeletePdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeletePdf(body);
      }

  @common.Get("/:id/get-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetPdf(body);
      }

  @common.Patch("/pdfs/:id")
  @swagger.ApiOkResponse({
    type: PdfOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ModifyPdf(
    @common.Body()
    body: string
  ): Promise<PdfOutputDto> {
        return this.service.ModifyPdf(body);
      }

  @common.Get("/pdfs/:id")
  @swagger.ApiOkResponse({
    type: PdfOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrievePdf(
    @common.Body()
    body: string
  ): Promise<PdfOutputDto> {
        return this.service.RetrievePdf(body);
      }

  @common.Get("/:id/update-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdatePdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdatePdf(body);
      }
}
