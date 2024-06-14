import * as graphql from "@nestjs/graphql";
import { CostOptimizationResolverBase } from "./base/costOptimization.resolver.base";
import { CostOptimization } from "./base/CostOptimization";
import { CostOptimizationService } from "./costOptimization.service";

@graphql.Resolver(() => CostOptimization)
export class CostOptimizationResolver extends CostOptimizationResolverBase {
  constructor(protected readonly service: CostOptimizationService) {
    super(service);
  }
}
