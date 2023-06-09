export const Sleep = (ms: number) =>
  new Promise(res => {
    setTimeout(() => {
      res(null);
    }, ms);
  });
