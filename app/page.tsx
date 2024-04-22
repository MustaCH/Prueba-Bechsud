import { Divider } from "@chakra-ui/react";
import { Header, Breadcrumbs, Equipo } from "./components";
import { machineData, oilAnalysisData } from "../data/data";

export default function Home() {
  return (
    <main className="m-6">
      <Breadcrumbs />
      <Divider />
      <Header />
      <Equipo machineData={machineData} />
    </main>
  );
}
