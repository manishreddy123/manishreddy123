import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";

export type UtilizationMetricsUpdateInput = {
  cpuUsage?: number | null;
  ec2Instance?: Ec2InstanceWhereUniqueInput | null;
  memoryUsage?: number | null;
  networkUsage?: number | null;
  storageUsage?: number | null;
  timestamp?: Date | null;
};
