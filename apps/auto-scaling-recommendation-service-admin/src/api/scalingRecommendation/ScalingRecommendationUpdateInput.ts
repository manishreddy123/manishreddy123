import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";

export type ScalingRecommendationUpdateInput = {
  ec2Instance?: Ec2InstanceWhereUniqueInput | null;
  maxInstances?: number | null;
  minInstances?: number | null;
  recommendedInstanceType?: string | null;
  recommendedQuantity?: number | null;
  scalingPolicy?: string | null;
};
