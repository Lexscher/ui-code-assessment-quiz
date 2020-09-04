
// get percentage score
export const fracToPerc: Function = (num: number, total: number) => Math.floor((num * 100) / total);

// round up to the next multiple of 5
export const rounder: Function = (num: number) => Math.ceil(num / 5) * 5;