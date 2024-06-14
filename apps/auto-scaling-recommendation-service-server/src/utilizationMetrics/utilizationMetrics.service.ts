import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UtilizationMetricsServiceBase } from "./base/utilizationMetrics.service.base";

@Injectable()
export class UtilizationMetricsService extends UtilizationMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
