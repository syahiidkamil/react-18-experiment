import "./App.css";

import AutoBatching from "./components/AutoBatching.component";
import DemoUseTransition from "./components/DemoUseTransition.component";
import DemoUseDeferredValue from "./components/DemoUseDeferredValue.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AutoBatching /> */}
        {/* <DemoUseTransition /> */}
        <DemoUseDeferredValue />
      </header>
    </div>
  );
}

export default App;
