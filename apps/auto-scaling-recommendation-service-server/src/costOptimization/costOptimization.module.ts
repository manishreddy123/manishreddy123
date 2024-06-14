import { Module } from "@nestjs/common";
import { CostOptimizationModuleBase } from "./base/costOptimization.module.base";
import { CostOptimizationService } from "./costOptimization.service";
import { CostOptimizationController } from "./costOptimization.controller";
import { CostOptimizationResolver } from "./costOptimization.resolver";

@Module({
  imports: [CostOptimizationModuleBase],
  controllers: [CostOptimizationController],
  providers: [CostOptimizationService, CostOptimizationResolver],
  exports: [CostOptimizationService],
})
export class CostOptimizationModule {}
