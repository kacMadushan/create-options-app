import React from 'react';

const Action = ({ handlePickOption }) => {
  return (
    <div>
      <button onClick={handlePickOption}>What Should I Do ?</button>
    </div>
  );
}

export default Action;