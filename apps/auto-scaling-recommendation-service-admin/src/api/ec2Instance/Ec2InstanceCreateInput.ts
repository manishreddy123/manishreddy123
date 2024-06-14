import { CostOptimizationCreateNestedManyWithoutEc2InstancesInput } from "./CostOptimizationCreateNestedManyWithoutEc2InstancesInput";
import { ScalingRecommendationCreateNestedManyWithoutEc2InstancesInput } from "./ScalingRecommendationCreateNestedManyWithoutEc2InstancesInput";
import { UtilizationMetricsCreateNestedManyWithoutEc2InstancesInput } from "./UtilizationMetricsCreateNestedManyWithoutEc2InstancesInput";

export type Ec2InstanceCreateInput = {
  availabilityZone?: string | null;
  costOptimizations?: CostOptimizationCreateNestedManyWithoutEc2InstancesInput;
  instanceId?: string | null;
  instanceType?: string | null;
  launchTime?: Date | null;
  scalingRecommendations?: ScalingRecommendationCreateNestedManyWithoutEc2InstancesInput;
  utilizationMetricsItems?: UtilizationMetricsCreateNestedManyWithoutEc2InstancesInput;
};
