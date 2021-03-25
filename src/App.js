import './App.css';
import Item from './components/Item'

const todolist = [
  {id: 1, description: 'buy bananas'},
  {id: 2, description: 'buy cake'},
  {id: 3, description: 'buy avocado'}
]
function App() {
  return (
    <div className="App">
      {todolist.map(todo => <Item description={todo.description}/>)}
    </div>
  );
}

export default App;
