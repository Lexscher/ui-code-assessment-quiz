export const handleError: Error | any = (err: Error) => {
  console.error(err);
  return err;
};
