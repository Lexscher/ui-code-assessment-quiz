// helper takes two strings and compares them. Returns a boolean.
export const equalStrings: Function = (str1: string, str2: string) => {
  return str1.toLowerCase() === str2.toLowerCase();
};

// helper cleans up a string
export const strCleaner: Function = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
