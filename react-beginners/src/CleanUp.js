import React, { useEffect, useState } from 'react';

function Hello() {
  // create = useEffect
  // function byFn() {
  //   console.log('bye :(');
  // }
  // function hiFn() {
  //   console.log('created :)');
  //   return byFn;
  // }

  // useEffect(hiFn, []);
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
  // useEffect(() => {
  //   console.log('Created :)');
  //   return () => console.log('Destroy');
  // }, []);
  // return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'show'}</button>
    </div>
  );
}

export default CleanUp;
