/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Ec2Instance } from "./Ec2Instance";
import { Ec2InstanceCountArgs } from "./Ec2InstanceCountArgs";
import { Ec2InstanceFindManyArgs } from "./Ec2InstanceFindManyArgs";
import { Ec2InstanceFindUniqueArgs } from "./Ec2InstanceFindUniqueArgs";
import { CreateEc2InstanceArgs } from "./CreateEc2InstanceArgs";
import { UpdateEc2InstanceArgs } from "./UpdateEc2InstanceArgs";
import { DeleteEc2InstanceArgs } from "./DeleteEc2InstanceArgs";
import { CostOptimizationFindManyArgs } from "../../costOptimization/base/CostOptimizationFindManyArgs";
import { CostOptimization } from "../../costOptimization/base/CostOptimization";
import { ScalingRecommendationFindManyArgs } from "../../scalingRecommendation/base/ScalingRecommendationFindManyArgs";
import { ScalingRecommendation } from "../../scalingRecommendation/base/ScalingRecommendation";
import { UtilizationMetricsFindManyArgs } from "../../utilizationMetrics/base/UtilizationMetricsFindManyArgs";
import { UtilizationMetrics } from "../../utilizationMetrics/base/UtilizationMetrics";
import { Ec2InstanceService } from "../ec2Instance.service";
@graphql.Resolver(() => Ec2Instance)
export class Ec2InstanceResolverBase {
  constructor(protected readonly service: Ec2InstanceService) {}

  async _ec2InstancesMeta(
    @graphql.Args() args: Ec2InstanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Ec2Instance])
  async ec2Instances(
    @graphql.Args() args: Ec2InstanceFindManyArgs
  ): Promise<Ec2Instance[]> {
    return this.service.ec2Instances(args);
  }

  @graphql.Query(() => Ec2Instance, { nullable: true })
  async ec2Instance(
    @graphql.Args() args: Ec2InstanceFindUniqueArgs
  ): Promise<Ec2Instance | null> {
    const result = await this.service.ec2Instance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ec2Instance)
  async createEc2Instance(
    @graphql.Args() args: CreateEc2InstanceArgs
  ): Promise<Ec2Instance> {
    return await this.service.createEc2Instance({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Ec2Instance)
  async updateEc2Instance(
    @graphql.Args() args: UpdateEc2InstanceArgs
  ): Promise<Ec2Instance | null> {
    try {
      return await this.service.updateEc2Instance({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ec2Instance)
  async deleteEc2Instance(
    @graphql.Args() args: DeleteEc2InstanceArgs
  ): Promise<Ec2Instance | null> {
    try {
      return await this.service.deleteEc2Instance(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CostOptimization], { name: "costOptimizations" })
  async findCostOptimizations(
    @graphql.Parent() parent: Ec2Instance,
    @graphql.Args() args: CostOptimizationFindManyArgs
  ): Promise<CostOptimization[]> {
    const results = await this.service.findCostOptimizations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ScalingRecommendation], {
    name: "scalingRecommendations",
  })
  async findScalingRecommendations(
    @graphql.Parent() parent: Ec2Instance,
    @graphql.Args() args: ScalingRecommendationFindManyArgs
  ): Promise<ScalingRecommendation[]> {
    const results = await this.service.findScalingRecommendations(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [UtilizationMetrics], {
    name: "utilizationMetricsItems",
  })
  async findUtilizationMetricsItems(
    @graphql.Parent() parent: Ec2Instance,
    @graphql.Args() args: UtilizationMetricsFindManyArgs
  ): Promise<UtilizationMetrics[]> {
    const results = await this.service.findUtilizationMetricsItems(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}