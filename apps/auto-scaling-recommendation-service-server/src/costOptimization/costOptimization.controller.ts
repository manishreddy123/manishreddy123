import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostOptimizationService } from "./costOptimization.service";
import { CostOptimizationControllerBase } from "./base/costOptimization.controller.base";

@swagger.ApiTags("costOptimizations")
@common.Controller("costOptimizations")
export class CostOptimizationController extends CostOptimizationControllerBase {
  constructor(protected readonly service: CostOptimizationService) {
    super(service);
  }
}
