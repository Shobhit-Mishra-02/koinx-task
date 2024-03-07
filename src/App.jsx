import "./App.css";
import {
  Navbar,
  GetStartedSection,
  Team,
  BitcoinPriceChart,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="body_container">
        <div className="body_container__first">
          <BitcoinPriceChart />
          <Team />
        </div>
        <div className="body_container__second">
          <GetStartedSection />
        </div>
      </div>
    </>
  );
}

export default App;
