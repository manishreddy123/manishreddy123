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
import { CostOptimization } from "./CostOptimization";
import { CostOptimizationCountArgs } from "./CostOptimizationCountArgs";
import { CostOptimizationFindManyArgs } from "./CostOptimizationFindManyArgs";
import { CostOptimizationFindUniqueArgs } from "./CostOptimizationFindUniqueArgs";
import { CreateCostOptimizationArgs } from "./CreateCostOptimizationArgs";
import { UpdateCostOptimizationArgs } from "./UpdateCostOptimizationArgs";
import { DeleteCostOptimizationArgs } from "./DeleteCostOptimizationArgs";
import { Ec2Instance } from "../../ec2Instance/base/Ec2Instance";
import { CostOptimizationService } from "../costOptimization.service";
@graphql.Resolver(() => CostOptimization)
export class CostOptimizationResolverBase {
  constructor(protected readonly service: CostOptimizationService) {}

  async _costOptimizationsMeta(
    @graphql.Args() args: CostOptimizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CostOptimization])
  async costOptimizations(
    @graphql.Args() args: CostOptimizationFindManyArgs
  ): Promise<CostOptimization[]> {
    return this.service.costOptimizations(args);
  }

  @graphql.Query(() => CostOptimization, { nullable: true })
  async costOptimization(
    @graphql.Args() args: CostOptimizationFindUniqueArgs
  ): Promise<CostOptimization | null> {
    const result = await this.service.costOptimization(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CostOptimization)
  async createCostOptimization(
    @graphql.Args() args: CreateCostOptimizationArgs
  ): Promise<CostOptimization> {
    return await this.service.createCostOptimization({
      ...args,
      data: {
        ...args.data,

        ec2Instance: args.data.ec2Instance
          ? {
              connect: args.data.ec2Instance,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CostOptimization)
  async updateCostOptimization(
    @graphql.Args() args: UpdateCostOptimizationArgs
  ): Promise<CostOptimization | null> {
    try {
      return await this.service.updateCostOptimization({
        ...args,
        data: {
          ...args.data,

          ec2Instance: args.data.ec2Instance
            ? {
                connect: args.data.ec2Instance,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => CostOptimization)
  async deleteCostOptimization(
    @graphql.Args() args: DeleteCostOptimizationArgs
  ): Promise<CostOptimization | null> {
    try {
      return await this.service.deleteCostOptimization(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Ec2Instance, {
    nullable: true,
    name: "ec2Instance",
  })
  async getEc2Instance(
    @graphql.Parent() parent: CostOptimization
  ): Promise<Ec2Instance | null> {
    const result = await this.service.getEc2Instance(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
