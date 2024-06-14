import { Ec2Instance } from "../ec2Instance/Ec2Instance";

export type ScalingRecommendation = {
  createdAt: Date;
  ec2Instance?: Ec2Instance | null;
  id: string;
  maxInstances: number | null;
  minInstances: number | null;
  recommendedInstanceType: string | null;
  recommendedQuantity: number | null;
  scalingPolicy: string | null;
  updatedAt: Date;
};
