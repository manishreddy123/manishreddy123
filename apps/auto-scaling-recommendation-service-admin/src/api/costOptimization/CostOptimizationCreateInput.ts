import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";

export type CostOptimizationCreateInput = {
  ec2Instance?: Ec2InstanceWhereUniqueInput | null;
  estimatedCostSaving?: number | null;
  recommendedPricingModel?: string | null;
};
