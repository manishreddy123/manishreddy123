/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CostOptimizationWhereInput } from "./CostOptimizationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CostOptimizationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CostOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => CostOptimizationWhereInput)
  @IsOptional()
  @Field(() => CostOptimizationWhereInput, {
    nullable: true,
  })
  every?: CostOptimizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CostOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => CostOptimizationWhereInput)
  @IsOptional()
  @Field(() => CostOptimizationWhereInput, {
    nullable: true,
  })
  some?: CostOptimizationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CostOptimizationWhereInput,
  })
  @ValidateNested()
  @Type(() => CostOptimizationWhereInput)
  @IsOptional()
  @Field(() => CostOptimizationWhereInput, {
    nullable: true,
  })
  none?: CostOptimizationWhereInput;
}
export { CostOptimizationListRelationFilter as CostOptimizationListRelationFilter };
