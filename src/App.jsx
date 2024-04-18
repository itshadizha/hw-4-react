import "./App.css";
import Task1 from "./assets/components/task 1/Task1";
import Task2 from "./assets/components/task 2/Task2";
import Task3 from "./assets/components/task 3/Task3";
import Task4 from "./assets/components/task 4/Task4";
import Task5 from "./assets/components/task 5/Task5";
import Task6 from "./assets/components/task 6/Task6";
import Task7 from "./assets/components/task 7/Task7";
import Task8 from "./assets/components/task 8/Task8";

function App() {
  return (
    < >
      <Task1 />
      <Task2 />
      <Task3 on={true} />
      <Task4/>
      <Task5/>
      <br />
      <Task6/>
      <Task7/>
      <Task8/>
    </>
  );
}

export default App;
