import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScalingRecommendationServiceBase } from "./base/scalingRecommendation.service.base";

@Injectable()
export class ScalingRecommendationService extends ScalingRecommendationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
