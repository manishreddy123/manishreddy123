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
import { Ec2InstanceWhereUniqueInput } from "../../ec2Instance/base/Ec2InstanceWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScalingRecommendationCreateInput {
  @ApiProperty({
    required: false,
    type: () => Ec2InstanceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Ec2InstanceWhereUniqueInput)
  @IsOptional()
  @Field(() => Ec2InstanceWhereUniqueInput, {
    nullable: true,
  })
  ec2Instance?: Ec2InstanceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxInstances?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minInstances?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recommendedInstanceType?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  recommendedQuantity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  scalingPolicy?: string | null;
}

export { ScalingRecommendationCreateInput as ScalingRecommendationCreateInput };