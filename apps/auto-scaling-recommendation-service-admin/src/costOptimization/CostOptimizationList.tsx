import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EC2INSTANCE_TITLE_FIELD } from "../ec2Instance/Ec2InstanceTitle";

export const CostOptimizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CostOptimizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};