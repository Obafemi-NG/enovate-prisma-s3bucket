import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type: string;
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeHolder?: string;
  name: string;
  value: string;
  required: boolean;
  label?: string;
}

const CustomInput = ({
  type,
  onChangeHandler,
  placeHolder,
  name,
  value,
  required,
  label,
}: CustomInputProps) => {
  return (
    <div>
      {type === "radio" ? (
        <label className=" flex items-center ">
          <input
            type={type}
            onChange={onChangeHandler}
            placeholder={placeHolder}
            name={name}
            value={value}
            required={required}
            className={` text-center peer hidden  `}
          />
          <span className=" peer-checked:bg-enovate-light-purple peer-checked:text-white px-4 py-2 rounded-2xl border border-enovate-light-purple peer-checked:border-white hover:cursor-pointer text-nowrap peer-checked:inset-shadow-sm  inset-shadow-enovate-dark-purple peer-checked:drop-shadow-xs peer-checked:drop-shadow-enovate-light-purple ">
            {label}
          </span>
        </label>
      ) : (
        <input
          type={type}
          onChange={onChangeHandler}
          placeholder={placeHolder}
          name={name}
          value={value}
          required={required}
          className={`border-b px-4 py-2 outline-none text-center  `}
        />
      )}{" "}
    </div>
  );
};

export default CustomInput;
