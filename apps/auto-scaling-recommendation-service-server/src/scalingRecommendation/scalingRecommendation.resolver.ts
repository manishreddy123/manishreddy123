import * as graphql from "@nestjs/graphql";
import { ScalingRecommendationResolverBase } from "./base/scalingRecommendation.resolver.base";
import { ScalingRecommendation } from "./base/ScalingRecommendation";
import { ScalingRecommendationService } from "./scalingRecommendation.service";

@graphql.Resolver(() => ScalingRecommendation)
export class ScalingRecommendationResolver extends ScalingRecommendationResolverBase {
  constructor(protected readonly service: ScalingRecommendationService) {
    super(service);
  }
}
