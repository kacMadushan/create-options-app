import React from 'react';
import Option from './Option';

const Options = ({ options, handleRemoveOption, handleRemoveAllOptions }) => {
  let optionElement = null;
  if (options.length) {
    optionElement = options.map((option, index) => (
      <Option
        key={index}
        count={index + 1}
        optionText={option}
        handleRemoveOption={handleRemoveOption}
      />
    ))
  }
  return (
    <div>
      <div>
        <h3>Your Options</h3>
        <button onClick={handleRemoveAllOptions}>Remove All</button>
      </div>
      {optionElement}
    </div>
  );
}

export default Options;