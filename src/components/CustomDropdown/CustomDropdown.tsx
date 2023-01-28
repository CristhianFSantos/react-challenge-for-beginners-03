import React from "react";
import "./styles.scss";

export interface CustomDropdownProps {
  name: string;
  label: string;
  options: string[];
  dropdownControl: (value: string, name: string) => void;
  clearDropdown?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = (
  props: CustomDropdownProps
) => {
  const { label, dropdownControl, options, name } = props;
  const [value, setValue] = React.useState<string>("");

  const emptyOption = " select...";
  const buidOptions = () => {
    return [emptyOption, ...options].sort((a, b) => a.localeCompare(b));
  };
  const optionsSorted = buidOptions();

  const handleChangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === emptyOption) return;
    setValue(event.target.value);
    dropdownControl(event.target.value, name);
  };

  React.useEffect(() => {
    if (props.clearDropdown) {
      setValue(emptyOption);
    }
  }, [props.clearDropdown]);

  return (
    <div className="container-dropdown">
      <label htmlFor={`input-${label}`}>{label}</label>
      <select
        defaultChecked={false}
        id={`input-${label}`}
        onChange={handleChangeValue}
        value={value}
      >
        {optionsSorted.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export { CustomDropdown };
