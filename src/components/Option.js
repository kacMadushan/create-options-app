import React from 'react';

const Option = ({ count, optionText, handleRemoveOption }) => {
  return (
    <div>
      <h3>{count}. {optionText}</h3>
      <button
        onClick={() => handleRemoveOption(optionText)}
      >
        Remove
      </button>
    </div>
  );
}

export default Option;