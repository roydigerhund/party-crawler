export const randomFromArray = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
}