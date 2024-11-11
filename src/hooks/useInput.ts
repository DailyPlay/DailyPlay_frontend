import {useEffect, useRef, useState} from 'react';

const useInput = <T>(defaultValue: T) => {
  const [state, setState] = useState(defaultValue);
  const prevValue = useRef(defaultValue);

  useEffect(() => {
    if (JSON.stringify(prevValue.current) !== JSON.stringify(defaultValue)) {
      setState(defaultValue);
      prevValue.current = defaultValue;
    }
  }, [defaultValue]);

  const onChange = ({key, value}: {key: keyof T; value: T[keyof T]}) => {
    setState({...state, [key]: value});
  };

  const onReset = () => setState(defaultValue);

  return {
    state,
    onChange,
    onReset,
  };
};

export default useInput;
