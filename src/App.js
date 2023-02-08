import "./App.css";

import AutoBatching from "./components/AutoBatching.component";
import DemoUseTransition from "./components/DemoUseTransition.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AutoBatching /> */}
        <DemoUseTransition />
      </header>
    </div>
  );
}

export default App;
