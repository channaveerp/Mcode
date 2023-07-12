import BecomeValidator from "./components/becomeValidator";
import Features from "./components/featureView";
import Heroview from "./components/heroView";
import HowItWorks from "./components/howItWorks";
import StakeRevolution from "./components/stakeRevolution";

export default function Home() {
  return <main>
    <Heroview />
    <StakeRevolution />
    <Features />
    <BecomeValidator />
    <HowItWorks />
  </main>;
}
