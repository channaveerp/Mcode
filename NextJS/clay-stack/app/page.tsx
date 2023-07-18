import Ambassador from "./components/ambassador";
import BecomeValidator from "./components/becomeValidator";
import Features from "./components/featureView";
import Heroview from "./components/heroView";
import HowItWorks from "./components/howItWorks";
import LiquidityCarousel from "./components/liquidityCarousel";
import Press from "./components/press";
import StakeRevolution from "./components/stakeRevolution";
import StakingExperts from "./components/stakingExperts";
import StartStaking from "./components/startStaking";
import SupportedTokens from "./components/supportedTokens";
import TrustedInvestors from "./components/trustedInvestors";

export default function Home() {
  return (
    <main>
      <Heroview />
      <StakeRevolution />
      <Features />
      <BecomeValidator />
      <HowItWorks />
      <SupportedTokens />
      <StakingExperts />
      <Ambassador />
      <LiquidityCarousel />
      <TrustedInvestors />
      <Press />
      <StartStaking />
    </main>
  );
}
