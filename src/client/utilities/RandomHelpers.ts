// helper is a closure made to take in a number, x
const randomNum: Function = (x: number) => {
  // takes in a number, n
  // return x random numbers (each number randomly picked from from 0 - n)
  return (n: number) => {
    const randNumsMap: Map<number, boolean> = new Map();

    // fill up the rando
    while (randNumsMap.size < x) {
      const randNum: number = Math.floor(Math.random() * n);
      if (!randNumsMap.get(randNum)) randNumsMap.set(randNum, true);
    }

    return randNumsMap;
  };
};

// helper to take in a number, n
// return three random numbers from 0 - n
export const randomThree: Function = randomNum(3);
