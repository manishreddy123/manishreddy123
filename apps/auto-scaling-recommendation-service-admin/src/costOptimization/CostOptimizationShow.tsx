import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EC2INSTANCE_TITLE_FIELD } from "../ec2Instance/Ec2InstanceTitle";

export const CostOptimizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EC2Instance"
          source="ec2instance.id"
          reference="Ec2Instance"
        >
          <TextField source={EC2INSTANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="estimatedCostSaving" source="estimatedCostSaving" />
        <TextField label="ID" source="id" />
        <TextField
          label="recommendedPricingModel"
          source="recommendedPricingModel"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};