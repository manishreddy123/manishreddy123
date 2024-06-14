import { CostOptimizationUpdateManyWithoutEc2InstancesInput } from "./CostOptimizationUpdateManyWithoutEc2InstancesInput";
import { ScalingRecommendationUpdateManyWithoutEc2InstancesInput } from "./ScalingRecommendationUpdateManyWithoutEc2InstancesInput";
import { UtilizationMetricsUpdateManyWithoutEc2InstancesInput } from "./UtilizationMetricsUpdateManyWithoutEc2InstancesInput";

export type Ec2InstanceUpdateInput = {
  availabilityZone?: string | null;
  costOptimizations?: CostOptimizationUpdateManyWithoutEc2InstancesInput;
  instanceId?: string | null;
  instanceType?: string | null;
  launchTime?: Date | null;
  scalingRecommendations?: ScalingRecommendationUpdateManyWithoutEc2InstancesInput;
  utilizationMetricsItems?: UtilizationMetricsUpdateManyWithoutEc2InstancesInput;
};
