import { SortOrder } from "../../util/SortOrder";

export type Ec2InstanceOrderByInput = {
  availabilityZone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  instanceId?: SortOrder;
  instanceType?: SortOrder;
  launchTime?: SortOrder;
  updatedAt?: SortOrder;
};
