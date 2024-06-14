import { Ec2InstanceWhereInput } from "./Ec2InstanceWhereInput";
import { Ec2InstanceOrderByInput } from "./Ec2InstanceOrderByInput";

export type Ec2InstanceFindManyArgs = {
  where?: Ec2InstanceWhereInput;
  orderBy?: Array<Ec2InstanceOrderByInput>;
  skip?: number;
  take?: number;
};
