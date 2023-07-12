import Ambassador from "./components/ambassador";
import BecomeValidator from "./components/becomeValidator";
import Features from "./components/featureView";
import Heroview from "./components/heroView";
import HowItWorks from "./components/howItWorks";
import StakeRevolution from "./components/stakeRevolution";
import StakingExperts from "./components/stakingExperts";
import SupportedTokens from "./components/supportedTokens";

export default function Home() {
  return <main>
    <Heroview />
    <StakeRevolution />
    <Features />
    <BecomeValidator />
    <HowItWorks />
    <SupportedTokens />
    <StakingExperts />
    <Ambassador />
  </main>;
}
