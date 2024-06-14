import { ScalingRecommendation as TScalingRecommendation } from "../api/scalingRecommendation/ScalingRecommendation";

export const SCALINGRECOMMENDATION_TITLE_FIELD = "recommendedInstanceType";

export const ScalingRecommendationTitle = (
  record: TScalingRecommendation
): string => {
  return record.recommendedInstanceType?.toString() || String(record.id);
};
