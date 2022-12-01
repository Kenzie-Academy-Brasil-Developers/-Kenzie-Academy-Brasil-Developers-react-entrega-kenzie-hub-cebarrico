import { useState } from "react";

import "./style.css";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

export const Input = ({ id, label, type, register, placeholder }) => {
  const [showPass, setShowPass] = useState(false);
  const [icon, setIcon] = useState(false);

  function show() {
    setShowPass(!showPass);
    setIcon(!icon);
  }
  return (
    <fieldset>
      <label name="">{label}</label>
      <input
        id={id}
        type={showPass ? "text" : type}
        placeholder={placeholder}
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
