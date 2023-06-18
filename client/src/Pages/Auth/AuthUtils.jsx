const errors = [{ emptyField: "Fill in email and password" }];

export const emptyCheck = (field, setErrorMsg, setError) => {
  if (field === "") {
    setError;
    setErrorMsg;
    return;
  }
};
