import React from "react";
import "./styles.scss";

export interface CustomInputProps {
  name: string;
  label: string;
  haveError?: boolean;
  placeholder?: string;
  inputControl: (value: string, name: string) => void;
  clearInput?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  const { label, inputControl, placeholder, name } = props;
  const [value, setValue] = React.useState<string>("");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    inputControl(event.target.value, name);
  };

  React.useEffect(() => {
    if (props.clearInput) {
      setValue("");
    }
  }, [props.clearInput]);

  return (
    <div className="container-input">
      <label htmlFor={`input-${label}`}>{label}</label>
      <input
        className={props.haveError ? "error" : ""}
        id={`input-${label}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
};

export { CustomInput };
