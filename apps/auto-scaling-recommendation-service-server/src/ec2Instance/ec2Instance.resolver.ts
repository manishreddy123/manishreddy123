import * as graphql from "@nestjs/graphql";
import { Ec2InstanceResolverBase } from "./base/ec2Instance.resolver.base";
import { Ec2Instance } from "./base/Ec2Instance";
import { Ec2InstanceService } from "./ec2Instance.service";

@graphql.Resolver(() => Ec2Instance)
export class Ec2InstanceResolver extends Ec2InstanceResolverBase {
  constructor(protected readonly service: Ec2InstanceService) {
    super(service);
  }
}
