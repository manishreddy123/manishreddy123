/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CostOptimizationWhereInput } from "./CostOptimizationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CostOptimizationCountArgs {
  @ApiProperty({
    required: false,
    type: () => CostOptimizationWhereInput,
  })
  @Field(() => CostOptimizationWhereInput, { nullable: true })
  @Type(() => CostOptimizationWhereInput)
  where?: CostOptimizationWhereInput;
}

export { CostOptimizationCountArgs as CostOptimizationCountArgs };