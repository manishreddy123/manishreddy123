import { CostOptimization } from "../costOptimization/CostOptimization";
import { ScalingRecommendation } from "../scalingRecommendation/ScalingRecommendation";
import { UtilizationMetrics } from "../utilizationMetrics/UtilizationMetrics";

export type Ec2Instance = {
  availabilityZone: string | null;
  costOptimizations?: Array<CostOptimization>;
  createdAt: Date;
  id: string;
  instanceId: string | null;
  instanceType: string | null;
  launchTime: Date | null;
  scalingRecommendations?: Array<ScalingRecommendation>;
  updatedAt: Date;
  utilizationMetricsItems?: Array<UtilizationMetrics>;
};
