import { Car } from "./Components/Courosel/Car";
import { Done } from "./Components/Done/Done";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/Navbar";
import { UsedBy } from "./Components/UsedBy/UsedBy";
import { RWrap } from "./Components/RealWrap/RWrap";
import { Work } from "./Components/Work/Work";
import { Pic } from "./Components/Pic/Pic";

const App = () => {
  return (
    <div>
      <Navbar />
      <Car />
      <UsedBy />
      <Done />
      <About />
      <RWrap />
      <Work />
      <Pic />
    </div>
  );
};

export default App;
