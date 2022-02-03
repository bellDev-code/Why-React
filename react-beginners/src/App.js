import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);

  // 1. 만약 API를 불러온다는 가정하에 현재 state가 바뀔때마다 계속 'call an API' 가 불러와진다.
  // 2. state를 변경할 때 모든 code들은 다시 시작된다. 때로는 이 현상이 좋으나, 처음 딱 한 번만 실행되고 다시는 실행되지 않는걸 원할 수 있다.
  console.log('call an API');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
