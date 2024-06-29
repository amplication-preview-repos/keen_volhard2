import { Module } from "@nestjs/common";
import { PdfManagementService } from "./pdfmanagement.service";
import { PdfManagementController } from "./pdfmanagement.controller";
import { PdfManagementResolver } from "./pdfmanagement.resolver";

@Module({
  controllers: [PdfManagementController],
  providers: [PdfManagementService, PdfManagementResolver],
  exports: [PdfManagementService],
})
export class PdfManagementModule {}
