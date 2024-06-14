import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { Ec2InstanceTitle } from "../ec2Instance/Ec2InstanceTitle";

export const UtilizationMetricsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cpuUsage" source="cpuUsage" />
        <ReferenceInput
          source="ec2Instance.id"
          reference="Ec2Instance"
          label="EC2Instance"
        >
          <SelectInput optionText={Ec2InstanceTitle} />
        </ReferenceInput>
        <NumberInput label="memoryUsage" source="memoryUsage" />
        <NumberInput label="networkUsage" source="networkUsage" />
        <NumberInput label="storageUsage" source="storageUsage" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
