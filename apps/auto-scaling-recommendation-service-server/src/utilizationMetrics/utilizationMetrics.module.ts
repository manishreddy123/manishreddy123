import { Module } from "@nestjs/common";
import { UtilizationMetricsModuleBase } from "./base/utilizationMetrics.module.base";
import { UtilizationMetricsService } from "./utilizationMetrics.service";
import { UtilizationMetricsController } from "./utilizationMetrics.controller";
import { UtilizationMetricsResolver } from "./utilizationMetrics.resolver";

@Module({
  imports: [UtilizationMetricsModuleBase],
  controllers: [UtilizationMetricsController],
  providers: [UtilizationMetricsService, UtilizationMetricsResolver],
  exports: [UtilizationMetricsService],
})
export class UtilizationMetricsModule {}
