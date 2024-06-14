import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostOptimizationServiceBase } from "./base/costOptimization.service.base";

@Injectable()
export class CostOptimizationService extends CostOptimizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
