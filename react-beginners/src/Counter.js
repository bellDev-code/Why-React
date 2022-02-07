import { useState, useEffect } from 'react';

function Counter() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time');

  // 코드를 언제 실행할지 결정하는 함수
  //
  useEffect(() => {
    // 처음 한 번만 실행되는 코드
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    // keyword를 주시해라! keywor가 변경되면 코드가 실행
    console.log("I run when 'keyword' chnages. ");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    // keyword, counter 중 둘 중 하나가 변경되면 실행하는 코드
    console.log('I run when keyword & counter changes');
  }, [keyword, counter]);

  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default Counter;
