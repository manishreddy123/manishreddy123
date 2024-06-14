import { UtilizationMetricsWhereInput } from "./UtilizationMetricsWhereInput";
import { UtilizationMetricsOrderByInput } from "./UtilizationMetricsOrderByInput";

export type UtilizationMetricsFindManyArgs = {
  where?: UtilizationMetricsWhereInput;
  orderBy?: Array<UtilizationMetricsOrderByInput>;
  skip?: number;
  take?: number;
};
