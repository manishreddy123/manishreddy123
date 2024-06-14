import { Ec2Instance as TEc2Instance } from "../api/ec2Instance/Ec2Instance";

export const EC2INSTANCE_TITLE_FIELD = "availabilityZone";

export const Ec2InstanceTitle = (record: TEc2Instance): string => {
  return record.availabilityZone?.toString() || String(record.id);
};
