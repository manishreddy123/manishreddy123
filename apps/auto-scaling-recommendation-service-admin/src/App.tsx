import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { Ec2InstanceList } from "./ec2Instance/Ec2InstanceList";
import { Ec2InstanceCreate } from "./ec2Instance/Ec2InstanceCreate";
import { Ec2InstanceEdit } from "./ec2Instance/Ec2InstanceEdit";
import { Ec2InstanceShow } from "./ec2Instance/Ec2InstanceShow";
import { ScalingRecommendationList } from "./scalingRecommendation/ScalingRecommendationList";
import { ScalingRecommendationCreate } from "./scalingRecommendation/ScalingRecommendationCreate";
import { ScalingRecommendationEdit } from "./scalingRecommendation/ScalingRecommendationEdit";
import { ScalingRecommendationShow } from "./scalingRecommendation/ScalingRecommendationShow";
import { CostOptimizationList } from "./costOptimization/CostOptimizationList";
import { CostOptimizationCreate } from "./costOptimization/CostOptimizationCreate";
import { CostOptimizationEdit } from "./costOptimization/CostOptimizationEdit";
import { CostOptimizationShow } from "./costOptimization/CostOptimizationShow";
import { UtilizationMetricsList } from "./utilizationMetrics/UtilizationMetricsList";
import { UtilizationMetricsCreate } from "./utilizationMetrics/UtilizationMetricsCreate";
import { UtilizationMetricsEdit } from "./utilizationMetrics/UtilizationMetricsEdit";
import { UtilizationMetricsShow } from "./utilizationMetrics/UtilizationMetricsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AutoScalingRecommendationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ec2Instance"
          list={Ec2InstanceList}
          edit={Ec2InstanceEdit}
          create={Ec2InstanceCreate}
          show={Ec2InstanceShow}
        />
        <Resource
          name="ScalingRecommendation"
          list={ScalingRecommendationList}
          edit={ScalingRecommendationEdit}
          create={ScalingRecommendationCreate}
          show={ScalingRecommendationShow}
        />
        <Resource
          name="CostOptimization"
          list={CostOptimizationList}
          edit={CostOptimizationEdit}
          create={CostOptimizationCreate}
          show={CostOptimizationShow}
        />
        <Resource
          name="UtilizationMetrics"
          list={UtilizationMetricsList}
          edit={UtilizationMetricsEdit}
          create={UtilizationMetricsCreate}
          show={UtilizationMetricsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
