import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CostOptimizationTitle } from "../costOptimization/CostOptimizationTitle";
import { ScalingRecommendationTitle } from "../scalingRecommendation/ScalingRecommendationTitle";
import { UtilizationMetricsTitle } from "../utilizationMetrics/UtilizationMetricsTitle";

export const Ec2InstanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="availabilityZone" source="availabilityZone" />
        <ReferenceArrayInput
          source="costOptimizations"
          reference="CostOptimization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CostOptimizationTitle} />
        </ReferenceArrayInput>
        <TextInput label="instanceId" source="instanceId" />
        <TextInput label="instanceType" source="instanceType" />
        <DateTimeInput label="launchTime" source="launchTime" />
        <ReferenceArrayInput
          source="scalingRecommendations"
          reference="ScalingRecommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScalingRecommendationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="utilizationMetricsItems"
          reference="UtilizationMetrics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UtilizationMetricsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
