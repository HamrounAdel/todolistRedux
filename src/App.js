

import './App.css';
import TodoAdd from './composant/TodoAdd';
import TodoList from './composant/TodoList';

function App() {


  return (
    <div className="pos app"> 
      <div  className="box" >
      <h1 >Todo List</h1>
     <TodoAdd   />
     <TodoList />
     </div>
    </div>
  );
}

export default App;
