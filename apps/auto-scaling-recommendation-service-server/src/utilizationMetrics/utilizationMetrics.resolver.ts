import * as graphql from "@nestjs/graphql";
import { UtilizationMetricsResolverBase } from "./base/utilizationMetrics.resolver.base";
import { UtilizationMetrics } from "./base/UtilizationMetrics";
import { UtilizationMetricsService } from "./utilizationMetrics.service";

@graphql.Resolver(() => UtilizationMetrics)
export class UtilizationMetricsResolver extends UtilizationMetricsResolverBase {
  constructor(protected readonly service: UtilizationMetricsService) {
    super(service);
  }
}
