import { useState } from "react";

export const useSignin = (init) => {
  const [value, setValue] = useState(init);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    onChange: (e) => {
      console.log("e.target.value", e.target.value);
      setValue(e.target.value);
    },
  };
};
