import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UtilizationMetricsWhereInput = {
  cpuUsage?: FloatNullableFilter;
  ec2Instance?: Ec2InstanceWhereUniqueInput;
  id?: StringFilter;
  memoryUsage?: FloatNullableFilter;
  networkUsage?: FloatNullableFilter;
  storageUsage?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
