import React from "react";
import "./styles.scss";

export interface CustomRadioProps {
  name: string;
  label: string;
  options: string[];
  inputControl: (value: string, name: string) => void;
  clearRadio?: boolean;
}

const CustomRadio: React.FC<CustomRadioProps> = (props: CustomRadioProps) => {
  const [_, setValue] = React.useState<string>("");
  const { label, options, inputControl, name } = props;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputControl(event.target.value, name);
    setValue(event.target.value);
  };

  React.useEffect(() => {
    if (props.clearRadio) {
      setValue("");
    }
  }, [props.clearRadio]);

  return (
    <div className="container-radio">
      <label htmlFor={`radio-${label}`}>{label}</label>
      <div className="radio-group">
        {options.map((option) => {
          return (
            <div className="radio-group-item" key={`input-${option}`}>
              <label>{option}</label>
              <input
                checked={option === _}
                type="radio"
                name="radio"
                value={option}
                onChange={handleChangeValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CustomRadio };
