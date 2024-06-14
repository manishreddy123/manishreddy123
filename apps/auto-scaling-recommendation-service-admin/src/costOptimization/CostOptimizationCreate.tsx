import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { Ec2InstanceTitle } from "../ec2Instance/Ec2InstanceTitle";

export const CostOptimizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ec2Instance.id"
          reference="Ec2Instance"
          label="EC2Instance"
        >
          <SelectInput optionText={Ec2InstanceTitle} />
        </ReferenceInput>
        <NumberInput label="estimatedCostSaving" source="estimatedCostSaving" />
        <TextInput
          label="recommendedPricingModel"
          source="recommendedPricingModel"
        />
      </SimpleForm>
    </Create>
  );
};
