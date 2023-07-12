import Features from "./components/featureView";
import Heroview from "./components/heroView";
import StakeRevolution from "./components/stakeRevolution";

export default function Home() {
  return <main>
    <Heroview />
    <StakeRevolution />
    <Features />
  </main>;
}
