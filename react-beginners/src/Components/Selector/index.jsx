import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Selector = ({ list }) => {
  const [selected, setSelectd] = useState('');

  const onChange = (event) => {
    setSelectd(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <select name="pets" value={selected} onChange={onChange}>
        <option value="">선택</option>
        {list.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

Selector.propTypes = {
  list: PropTypes.array,
};

export default Selector;
