import { SortOrder } from "../../util/SortOrder";

export type CostOptimizationOrderByInput = {
  createdAt?: SortOrder;
  ec2InstanceId?: SortOrder;
  estimatedCostSaving?: SortOrder;
  id?: SortOrder;
  recommendedPricingModel?: SortOrder;
  updatedAt?: SortOrder;
};
