import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EC2INSTANCE_TITLE_FIELD } from "../ec2Instance/Ec2InstanceTitle";

export const UtilizationMetricsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UtilizationMetricsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="cpuUsage" source="cpuUsage" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EC2Instance"
          source="ec2instance.id"
          reference="Ec2Instance"
        >
          <TextField source={EC2INSTANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="memoryUsage" source="memoryUsage" />
        <TextField label="networkUsage" source="networkUsage" />
        <TextField label="storageUsage" source="storageUsage" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
