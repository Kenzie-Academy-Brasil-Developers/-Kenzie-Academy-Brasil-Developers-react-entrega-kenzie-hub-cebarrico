import "./style.css";

export const Input = ({ id, label, type, register, placeholder }) => {
  return (
    <fieldset>
      <label name="">{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </fieldset>
  );
};
