import {useEffect, useState} from 'react';

export const useDebouncedValue = <T>(value: T, ms: number) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(value);
    }, ms);

    return () => clearTimeout(timeout);
  }, [ms, value]);

  return state;
};
