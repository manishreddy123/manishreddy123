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
import { UtilizationMetricsWhereInput } from "./UtilizationMetricsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UtilizationMetricsOrderByInput } from "./UtilizationMetricsOrderByInput";

@ArgsType()
class UtilizationMetricsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UtilizationMetricsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UtilizationMetricsWhereInput, { nullable: true })
  @Type(() => UtilizationMetricsWhereInput)
  where?: UtilizationMetricsWhereInput;

  @ApiProperty({
    required: false,
    type: [UtilizationMetricsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UtilizationMetricsOrderByInput], { nullable: true })
  @Type(() => UtilizationMetricsOrderByInput)
  orderBy?: Array<UtilizationMetricsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UtilizationMetricsFindManyArgs as UtilizationMetricsFindManyArgs };
