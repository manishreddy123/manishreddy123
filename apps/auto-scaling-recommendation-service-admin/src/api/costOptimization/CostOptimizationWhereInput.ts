import { Ec2InstanceWhereUniqueInput } from "../ec2Instance/Ec2InstanceWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CostOptimizationWhereInput = {
  ec2Instance?: Ec2InstanceWhereUniqueInput;
  estimatedCostSaving?: FloatNullableFilter;
  id?: StringFilter;
  recommendedPricingModel?: StringNullableFilter;
};
