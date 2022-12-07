import { useState } from "react";

import { InputStyle } from "./Input";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

export const Input = ({
  id,
  label,
  type,
  register,
  placeholder,
  value,
  disabled,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [icon, setIcon] = useState(false);

  function show() {
    setShowPass(!showPass);
    setIcon(!icon);
  }
  return (
    <fieldset>
      <label name="">{label}</label>
      <InputStyle
        id={id}
        type={showPass ? "text" : type}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        {...register}
      />
      {type === "password" && (
        <i onClick={() => show()}>
          {icon ? (
            <UilEyeSlash color="var(--color-grey-0)" />
          ) : (
            <UilEye color="var(--color-grey-0)" />
          )}
        </i>
      )}
    </fieldset>
  );
};
