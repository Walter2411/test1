import { Header } from "./components";
import RoleScreen from "./pages/RoleScreen";
import State from "./context/State";

import "./styles/index.scss";

function App() {
  return (
    <State>
      <div className="App">
        <Header />
        <RoleScreen />
      </div>
    </State>
  );
}

export default App;
