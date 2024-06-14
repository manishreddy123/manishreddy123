import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Ec2InstanceService } from "./ec2Instance.service";
import { Ec2InstanceControllerBase } from "./base/ec2Instance.controller.base";

@swagger.ApiTags("ec2Instances")
@common.Controller("ec2Instances")
export class Ec2InstanceController extends Ec2InstanceControllerBase {
  constructor(protected readonly service: Ec2InstanceService) {
    super(service);
  }
}
