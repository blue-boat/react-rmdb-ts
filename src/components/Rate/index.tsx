import React, { useState } from "react";

type Props = {
  callback: (value: number) => void;
};

const Rate: React.FC<Props> = ({ callback }) => {
  const [value, setValue] = useState(5);

  const handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void = (
    evt
  ) => {
    const newValue = Number(evt.currentTarget.value);
    setValue(newValue);
  };

  return (
    <>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          id="rating"
          type="range"
          min={1}
          max={10}
          value={value}
          onChange={(evt) => handleChange(evt)}
        />
        <label style={{ marginLeft: "20px" }} htmlFor="rating">
          {value}
        </label>
      </div>
      <button onClick={() => callback(value)}>Rate</button>
    </>
  );
};

export default Rate;
