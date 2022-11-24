import React, { useState } from "react";

const useInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;
