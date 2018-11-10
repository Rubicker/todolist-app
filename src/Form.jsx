import React, { useState } from "react";
const useInputValue = InitValue => {
  const [value, setValue] = useState(InitValue);
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};
export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
};
