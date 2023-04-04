import AddTask from "./components/Addtask";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";
import Updatelist from "./components/Updatelist";

function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <Updatelist />
      <Tasklist />
    </div>
  );
}

export default App;
