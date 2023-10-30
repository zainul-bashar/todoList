
import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputData, setInputData] = useState('');
  const [flag, setFlag] = useState(false);

  const saveFnc = () => {

    setTodoList([...todoList, inputData])
    setInputData('')

  }

  const deleteFnc = (index) => {

    const arr = todoList.filter((todo, inx) => inx !== index);
    setTodoList(arr)
   
  }

  const update = () => {

    setFlag(true)
  }

  return (
    <div>
    <div className="App">
      <input className='inputTag' type='text' onChange={(e) => setInputData(e.target.value)} value={inputData}></input>
      <button className='btn' onClick={saveFnc}>Add</button>
    </div>
      {
        todoList.map((data, index) => (
          <div className='todo' key={index}>
            <h3>{data}</h3>
            <button className='btn1' onClick={() => deleteFnc(index)}>Delete</button>
            <button className='btn2' onClick={update}>Update</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
