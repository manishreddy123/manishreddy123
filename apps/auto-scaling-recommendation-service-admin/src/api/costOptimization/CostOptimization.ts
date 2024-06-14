import { Ec2Instance } from "../ec2Instance/Ec2Instance";

export type CostOptimization = {
  createdAt: Date;
  ec2Instance?: Ec2Instance | null;
  estimatedCostSaving: number | null;
  id: string;
  recommendedPricingModel: string | null;
  updatedAt: Date;
};
