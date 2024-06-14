/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { Ec2InstanceService } from "../ec2Instance.service";
import { Ec2InstanceCreateInput } from "./Ec2InstanceCreateInput";
import { Ec2Instance } from "./Ec2Instance";
import { Ec2InstanceFindManyArgs } from "./Ec2InstanceFindManyArgs";
import { Ec2InstanceWhereUniqueInput } from "./Ec2InstanceWhereUniqueInput";
import { Ec2InstanceUpdateInput } from "./Ec2InstanceUpdateInput";
import { CostOptimizationFindManyArgs } from "../../costOptimization/base/CostOptimizationFindManyArgs";
import { CostOptimization } from "../../costOptimization/base/CostOptimization";
import { CostOptimizationWhereUniqueInput } from "../../costOptimization/base/CostOptimizationWhereUniqueInput";
import { ScalingRecommendationFindManyArgs } from "../../scalingRecommendation/base/ScalingRecommendationFindManyArgs";
import { ScalingRecommendation } from "../../scalingRecommendation/base/ScalingRecommendation";
import { ScalingRecommendationWhereUniqueInput } from "../../scalingRecommendation/base/ScalingRecommendationWhereUniqueInput";
import { UtilizationMetricsFindManyArgs } from "../../utilizationMetrics/base/UtilizationMetricsFindManyArgs";
import { UtilizationMetrics } from "../../utilizationMetrics/base/UtilizationMetrics";
import { UtilizationMetricsWhereUniqueInput } from "../../utilizationMetrics/base/UtilizationMetricsWhereUniqueInput";

export class Ec2InstanceControllerBase {
  constructor(protected readonly service: Ec2InstanceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ec2Instance })
  async createEc2Instance(
    @common.Body() data: Ec2InstanceCreateInput
  ): Promise<Ec2Instance> {
    return await this.service.createEc2Instance({
      data: data,
      select: {
        availabilityZone: true,
        createdAt: true,
        id: true,
        instanceId: true,
        instanceType: true,
        launchTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ec2Instance] })
  @ApiNestedQuery(Ec2InstanceFindManyArgs)
  async ec2Instances(@common.Req() request: Request): Promise<Ec2Instance[]> {
    const args = plainToClass(Ec2InstanceFindManyArgs, request.query);
    return this.service.ec2Instances({
      ...args,
      select: {
        availabilityZone: true,
        createdAt: true,
        id: true,
        instanceId: true,
        instanceType: true,
        launchTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ec2Instance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ec2Instance(
    @common.Param() params: Ec2InstanceWhereUniqueInput
  ): Promise<Ec2Instance | null> {
    const result = await this.service.ec2Instance({
      where: params,
      select: {
        availabilityZone: true,
        createdAt: true,
        id: true,
        instanceId: true,
        instanceType: true,
        launchTime: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ec2Instance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEc2Instance(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() data: Ec2InstanceUpdateInput
  ): Promise<Ec2Instance | null> {
    try {
      return await this.service.updateEc2Instance({
        where: params,
        data: data,
        select: {
          availabilityZone: true,
          createdAt: true,
          id: true,
          instanceId: true,
          instanceType: true,
          launchTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ec2Instance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEc2Instance(
    @common.Param() params: Ec2InstanceWhereUniqueInput
  ): Promise<Ec2Instance | null> {
    try {
      return await this.service.deleteEc2Instance({
        where: params,
        select: {
          availabilityZone: true,
          createdAt: true,
          id: true,
          instanceId: true,
          instanceType: true,
          launchTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/costOptimizations")
  @ApiNestedQuery(CostOptimizationFindManyArgs)
  async findCostOptimizations(
    @common.Req() request: Request,
    @common.Param() params: Ec2InstanceWhereUniqueInput
  ): Promise<CostOptimization[]> {
    const query = plainToClass(CostOptimizationFindManyArgs, request.query);
    const results = await this.service.findCostOptimizations(params.id, {
      ...query,
      select: {
        createdAt: true,

        ec2Instance: {
          select: {
            id: true,
          },
        },

        estimatedCostSaving: true,
        id: true,
        recommendedPricingModel: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/costOptimizations")
  async connectCostOptimizations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: CostOptimizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      costOptimizations: {
        connect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/costOptimizations")
  async updateCostOptimizations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: CostOptimizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      costOptimizations: {
        set: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/costOptimizations")
  async disconnectCostOptimizations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: CostOptimizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      costOptimizations: {
        disconnect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/scalingRecommendations")
  @ApiNestedQuery(ScalingRecommendationFindManyArgs)
  async findScalingRecommendations(
    @common.Req() request: Request,
    @common.Param() params: Ec2InstanceWhereUniqueInput
  ): Promise<ScalingRecommendation[]> {
    const query = plainToClass(
      ScalingRecommendationFindManyArgs,
      request.query
    );
    const results = await this.service.findScalingRecommendations(params.id, {
      ...query,
      select: {
        createdAt: true,

        ec2Instance: {
          select: {
            id: true,
          },
        },

        id: true,
        maxInstances: true,
        minInstances: true,
        recommendedInstanceType: true,
        recommendedQuantity: true,
        scalingPolicy: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scalingRecommendations")
  async connectScalingRecommendations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: ScalingRecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scalingRecommendations: {
        connect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scalingRecommendations")
  async updateScalingRecommendations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: ScalingRecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scalingRecommendations: {
        set: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scalingRecommendations")
  async disconnectScalingRecommendations(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: ScalingRecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scalingRecommendations: {
        disconnect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/utilizationMetricsItems")
  @ApiNestedQuery(UtilizationMetricsFindManyArgs)
  async findUtilizationMetricsItems(
    @common.Req() request: Request,
    @common.Param() params: Ec2InstanceWhereUniqueInput
  ): Promise<UtilizationMetrics[]> {
    const query = plainToClass(UtilizationMetricsFindManyArgs, request.query);
    const results = await this.service.findUtilizationMetricsItems(params.id, {
      ...query,
      select: {
        cpuUsage: true,
        createdAt: true,

        ec2Instance: {
          select: {
            id: true,
          },
        },

        id: true,
        memoryUsage: true,
        networkUsage: true,
        storageUsage: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/utilizationMetricsItems")
  async connectUtilizationMetricsItems(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: UtilizationMetricsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      utilizationMetricsItems: {
        connect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/utilizationMetricsItems")
  async updateUtilizationMetricsItems(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: UtilizationMetricsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      utilizationMetricsItems: {
        set: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/utilizationMetricsItems")
  async disconnectUtilizationMetricsItems(
    @common.Param() params: Ec2InstanceWhereUniqueInput,
    @common.Body() body: UtilizationMetricsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      utilizationMetricsItems: {
        disconnect: body,
      },
    };
    await this.service.updateEc2Instance({
      where: params,
      data,
      select: { id: true },
    });
  }
}