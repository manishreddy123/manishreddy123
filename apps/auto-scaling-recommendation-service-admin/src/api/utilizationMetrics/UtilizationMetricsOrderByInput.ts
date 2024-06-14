import { SortOrder } from "../../util/SortOrder";

export type UtilizationMetricsOrderByInput = {
  cpuUsage?: SortOrder;
  createdAt?: SortOrder;
  ec2InstanceId?: SortOrder;
  id?: SortOrder;
  memoryUsage?: SortOrder;
  networkUsage?: SortOrder;
  storageUsage?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
