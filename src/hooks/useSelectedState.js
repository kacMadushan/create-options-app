import React from 'react';

export const useSelectedState = () => {
  const [state, setState] = React.useState(undefined);
  return [state, setState]
}