import { Ec2InstanceWhereUniqueInput } from "./Ec2InstanceWhereUniqueInput";
import { Ec2InstanceUpdateInput } from "./Ec2InstanceUpdateInput";

export type UpdateEc2InstanceArgs = {
  where: Ec2InstanceWhereUniqueInput;
  data: Ec2InstanceUpdateInput;
};
