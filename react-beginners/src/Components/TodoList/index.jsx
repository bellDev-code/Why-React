import React, { useState } from 'react';

const ToDoList = () => {
  // 내가 할일은 문자열로 받을 것
  const [toDo, setToDo] = useState('');
  // 데이터 값을 받아야하므로 새로운 배열 값을 만든다.
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    // 이 state 항상 새로운 것이여야한다.
    // React.js는 함수의 첫번째 argument로 현재 state를 보낸다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
    // 우리는 state를 직접적으로 수정할 수 없다. 함수를 만들어야한다.
    // toDos.push()
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add ToDo</button>
      </form>
      <hr />
      {/* map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할 새로운 array를 return한다. */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
