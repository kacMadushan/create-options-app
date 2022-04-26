import React from 'react';

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = React.useState(() => {
    const valueInLocal = window.localStorage.getItem(key)
    if (valueInLocal) {
      return JSON.parse(valueInLocal)
    }
    return defaultValue
  })

  React.useEffect(() => {
    const json = JSON.stringify(state);
    window.localStorage.setItem(key, json)
  }, [key, state])

  return [state, setState]
}