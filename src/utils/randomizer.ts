export const randomizer = (
  min: number,
  array: string[],
  random = Math.random()
) => Math.floor(random * array.length - min);
