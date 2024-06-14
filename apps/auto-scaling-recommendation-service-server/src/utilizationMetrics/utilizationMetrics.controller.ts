import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UtilizationMetricsService } from "./utilizationMetrics.service";
import { UtilizationMetricsControllerBase } from "./base/utilizationMetrics.controller.base";

@swagger.ApiTags("utilizationMetrics")
@common.Controller("utilizationMetrics")
export class UtilizationMetricsController extends UtilizationMetricsControllerBase {
  constructor(protected readonly service: UtilizationMetricsService) {
    super(service);
  }
}
