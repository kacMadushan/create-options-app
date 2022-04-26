import React from 'react';

const AddOption = ({ handleAddNewOption }) => {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState(undefined);

  // Onchange text
  const handleOnChange = event => {
    const value = event.target.value;
    setText(value);
  }

  // onSubmit form
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const error = handleAddNewOption(text);
    setError(error);

    if (!error) {
      setText('');
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Option here..."
          value={text}
          onChange={handleOnChange}
        />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
}

export default AddOption;