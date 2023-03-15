import states from './states.json';
export const statesOptions = Object.entries(states.states).map(
  ([value, label]) => ({
    label,
    value,
  }),
);
