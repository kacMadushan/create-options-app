import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

// custom hooks
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const initialValue = [];

const App = () => {
  const [options, setOptions] = useLocalStorageState('options', initialValue)
  const [selectedOption, setSelectedOption] = React.useState(undefined);

  // pick rendom option
  const handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    setSelectedOption(option)
    alert(selectedOption);
  }

  // remove all options
  const handleRemoveAllOptions = () => setOptions([]);

  // handle remove option
  const handleRemoveOption = (text) => {
    const removeOption = options.filter(item => item !== text);
    setOptions(removeOption);
  }

  // Add new option
  const handleAddNewOption = (option) => {
    if (!option) {
      return 'Please enter valid option'
    } else if (options.indexOf(option) > -1) {
      return 'This option alredy exist'
    }
    setOptions([...options, option])
  }

  const title = "Options App!";
  return (
    <div>
      <Header title={title} />
      <Action handlePickOption={handlePickOption} />
      <Options
        handleRemoveAllOptions={handleRemoveAllOptions}
        handleRemoveOption={handleRemoveOption}
        options={options}
      />
      <AddOption handleAddNewOption={handleAddNewOption} />
    </div>
  );
}

export default App;