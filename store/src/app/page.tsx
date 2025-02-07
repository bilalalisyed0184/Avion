import Difference from "./Components/Difference";
import GetInTouch from "./Components/GetInTouch";
import Join from "./Components/Join";
import Popular from "./Components/Popular";
import Hero from "./Components/Hero";
import Ceramics from "./Components/Ceramics";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Difference/>
      <Ceramics />
      <br/>
      <br/>
      <br/>
      <br/>
      <Popular/>
      <Join/>
      <GetInTouch/>
    </div>
  );
}