import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScalingRecommendationService } from "./scalingRecommendation.service";
import { ScalingRecommendationControllerBase } from "./base/scalingRecommendation.controller.base";

@swagger.ApiTags("scalingRecommendations")
@common.Controller("scalingRecommendations")
export class ScalingRecommendationController extends ScalingRecommendationControllerBase {
  constructor(protected readonly service: ScalingRecommendationService) {
    super(service);
  }
}
