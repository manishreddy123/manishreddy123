import { Module } from "@nestjs/common";
import { Ec2InstanceModuleBase } from "./base/ec2Instance.module.base";
import { Ec2InstanceService } from "./ec2Instance.service";
import { Ec2InstanceController } from "./ec2Instance.controller";
import { Ec2InstanceResolver } from "./ec2Instance.resolver";

@Module({
  imports: [Ec2InstanceModuleBase],
  controllers: [Ec2InstanceController],
  providers: [Ec2InstanceService, Ec2InstanceResolver],
  exports: [Ec2InstanceService],
})
export class Ec2InstanceModule {}
