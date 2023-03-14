import {useMemo, useState} from 'react';

export const useBooleanState = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const api = useMemo(
    () => ({
      set: () => setState(true),
      unset: () => setState(false),
      toggle: () => setState(s => !s),
    }),
    [],
  );

  return [state, api] as const;
};
