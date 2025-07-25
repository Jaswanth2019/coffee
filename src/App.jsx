import "./App.css";
import Herosection from "./Components/Herosection/Herosection";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
function App() {
  return (
    <>
      <Herosection />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <div className="main-container">
        <h1>in process test</h1>
      </div>
    </>
  );
}

export default App;
