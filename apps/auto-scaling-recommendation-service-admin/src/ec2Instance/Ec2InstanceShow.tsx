import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EC2INSTANCE_TITLE_FIELD } from "./Ec2InstanceTitle";

export const Ec2InstanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availabilityZone" source="availabilityZone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="instanceId" source="instanceId" />
        <TextField label="instanceType" source="instanceType" />
        <TextField label="launchTime" source="launchTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CostOptimization"
          target="ec2InstanceId"
          label="CostOptimizations"
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
            <TextField
              label="estimatedCostSaving"
              source="estimatedCostSaving"
            />
            <TextField label="ID" source="id" />
            <TextField
              label="recommendedPricingModel"
              source="recommendedPricingModel"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ScalingRecommendation"
          target="ec2InstanceId"
          label="ScalingRecommendations"
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
            <TextField label="ID" source="id" />
            <TextField label="maxInstances" source="maxInstances" />
            <TextField label="minInstances" source="minInstances" />
            <TextField
              label="recommendedInstanceType"
              source="recommendedInstanceType"
            />
            <TextField
              label="recommendedQuantity"
              source="recommendedQuantity"
            />
            <TextField label="scalingPolicy" source="scalingPolicy" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UtilizationMetrics"
          target="ec2InstanceId"
          label="UtilizationMetricsItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
