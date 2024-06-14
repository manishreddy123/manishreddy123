import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CostOptimizationListRelationFilter } from "../costOptimization/CostOptimizationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScalingRecommendationListRelationFilter } from "../scalingRecommendation/ScalingRecommendationListRelationFilter";
import { UtilizationMetricsListRelationFilter } from "../utilizationMetrics/UtilizationMetricsListRelationFilter";

export type Ec2InstanceWhereInput = {
  availabilityZone?: StringNullableFilter;
  costOptimizations?: CostOptimizationListRelationFilter;
  id?: StringFilter;
  instanceId?: StringNullableFilter;
  instanceType?: StringNullableFilter;
  launchTime?: DateTimeNullableFilter;
  scalingRecommendations?: ScalingRecommendationListRelationFilter;
  utilizationMetricsItems?: UtilizationMetricsListRelationFilter;
};
