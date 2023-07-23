import {
  HealthAnalysis,
  Nutrients,
  VineyardIndicators,
  SensorsTable,
  SensorDataHistory,
  Title,
  HarvestingAnalysis,
} from "./components";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center gap-5 py-12">{children}</div>
  );
};

function App() {
  return (
    <Layout>
      <Title />
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <HealthAnalysis />
        <HarvestingAnalysis />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <VineyardIndicators />
        <Nutrients />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <SensorDataHistory />
        <SensorsTable />
      </div>
    </Layout>
  );
}

export default App;
