export const minifigsQueryKeys = {
  search: (search: string) => ({scope: 'minifigs', search} as const),
};

export type MinifigsQueryKeysSchema = typeof minifigsQueryKeys;
export type MinifigsQueryKeys = {
  [K in keyof MinifigsQueryKeysSchema]: ReturnType<MinifigsQueryKeysSchema[K]>;
};
