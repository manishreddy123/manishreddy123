import { SortOrder } from "../../util/SortOrder";

export type ScalingRecommendationOrderByInput = {
  createdAt?: SortOrder;
  ec2InstanceId?: SortOrder;
  id?: SortOrder;
  maxInstances?: SortOrder;
  minInstances?: SortOrder;
  recommendedInstanceType?: SortOrder;
  recommendedQuantity?: SortOrder;
  scalingPolicy?: SortOrder;
  updatedAt?: SortOrder;
};
