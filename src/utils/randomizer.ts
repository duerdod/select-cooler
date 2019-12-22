export const randomizer = (
  min: number,
  array: string[],
  random = Math.random()
): number => Math.floor(random * array.length - min);
