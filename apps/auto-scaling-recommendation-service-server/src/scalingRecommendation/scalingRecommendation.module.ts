import { Module } from "@nestjs/common";
import { ScalingRecommendationModuleBase } from "./base/scalingRecommendation.module.base";
import { ScalingRecommendationService } from "./scalingRecommendation.service";
import { ScalingRecommendationController } from "./scalingRecommendation.controller";
import { ScalingRecommendationResolver } from "./scalingRecommendation.resolver";

@Module({
  imports: [ScalingRecommendationModuleBase],
  controllers: [ScalingRecommendationController],
  providers: [ScalingRecommendationService, ScalingRecommendationResolver],
  exports: [ScalingRecommendationService],
})
export class ScalingRecommendationModule {}
