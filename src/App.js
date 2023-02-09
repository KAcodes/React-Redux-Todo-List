import './App.css';
import CurrentTasks from './components/CurrentTasks';
import NewToDo from './components/NewToDo';


function App() {
  return (
    <div className="App">
      <NewToDo/>
      <CurrentTasks/>
    </div>
  );
}

export default App;
