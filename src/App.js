import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item'

const todolist = [
{id: 1, description: 'bananas'},
{id: 2, description: 'ananas'}
]
function App() {
  const [list, setList] = useState(todolist)

  const handleAddItem = (newItem) => {
    const newTodo = {id: list.length, description: newItem}
    setList(prevList => [...prevList, newTodo])
  }

  // useEffect(() => handleAddItem({id: 2, description: 'apple'}), [])

  const handleEdit = (id, updatedTodo) => {

    setList(prevList => {
          return prevList.filter(listItem => listItem.id !== id)
        })
        handleAddItem(updatedTodo)
  }

  // useEffect(() =>   handleEdit(2, 'kitkat'), [])
  
  // console.log(list)
  return (
    <div className="App">
      {list.map(todo => <Item key={todo.id} id={todo.id} description={todo.description} todolist={todolist} handleEdit={handleEdit}/>)}
      <div><button onClick={}>add new</button></div>
    </div>
  );
}

export default App;
