import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  console.log('I run all the time');

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' chnages. ");
    // keyword를 주시해라!
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
