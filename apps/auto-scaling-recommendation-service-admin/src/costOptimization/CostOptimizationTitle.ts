import { CostOptimization as TCostOptimization } from "../api/costOptimization/CostOptimization";

export const COSTOPTIMIZATION_TITLE_FIELD = "recommendedPricingModel";

export const CostOptimizationTitle = (record: TCostOptimization): string => {
  return record.recommendedPricingModel?.toString() || String(record.id);
};
