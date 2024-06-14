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

export const ScalingRecommendationCreate = (
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
        <NumberInput step={1} label="maxInstances" source="maxInstances" />
        <NumberInput step={1} label="minInstances" source="minInstances" />
        <TextInput
          label="recommendedInstanceType"
          source="recommendedInstanceType"
        />
        <NumberInput
          step={1}
          label="recommendedQuantity"
          source="recommendedQuantity"
        />
        <TextInput label="scalingPolicy" multiline source="scalingPolicy" />
      </SimpleForm>
    </Create>
  );
};
