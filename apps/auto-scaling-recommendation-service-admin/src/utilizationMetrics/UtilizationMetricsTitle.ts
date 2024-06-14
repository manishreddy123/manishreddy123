import { UtilizationMetrics as TUtilizationMetrics } from "../api/utilizationMetrics/UtilizationMetrics";

export const UTILIZATIONMETRICS_TITLE_FIELD = "id";

export const UtilizationMetricsTitle = (
  record: TUtilizationMetrics
): string => {
  return record.id?.toString() || String(record.id);
};
