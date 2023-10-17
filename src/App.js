

import './App.css';
import Filter from './composant/Filter';

import TodoAdd from './composant/TodoAdd';
import TodoList from './composant/TodoList';

function App() {


  return (
    <div className="pos app"> 
      <div  className="box" >
      <h1 >Todo List</h1>
     <TodoAdd   />
    <hr/>
    <Filter/>
     <TodoList />
  
     </div>
    </div>
  );
}

export default App;
