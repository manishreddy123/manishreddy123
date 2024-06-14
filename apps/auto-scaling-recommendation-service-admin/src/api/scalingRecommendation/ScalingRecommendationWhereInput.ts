import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScalingRecommendationWhereInput = {
  ec2Instance?: Ec2InstanceWhereUniqueInput;
  id?: StringFilter;
  maxInstances?: IntNullableFilter;
  minInstances?: IntNullableFilter;
  recommendedInstanceType?: StringNullableFilter;
  recommendedQuantity?: IntNullableFilter;
  scalingPolicy?: StringNullableFilter;
};
