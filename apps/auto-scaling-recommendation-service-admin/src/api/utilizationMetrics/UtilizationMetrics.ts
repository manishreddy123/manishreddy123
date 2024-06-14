import { Ec2Instance } from "../ec2Instance/Ec2Instance";

export type UtilizationMetrics = {
  cpuUsage: number | null;
  createdAt: Date;
  ec2Instance?: Ec2Instance | null;
  id: string;
  memoryUsage: number | null;
  networkUsage: number | null;
  storageUsage: number | null;
  timestamp: Date | null;
  updatedAt: Date;
};
