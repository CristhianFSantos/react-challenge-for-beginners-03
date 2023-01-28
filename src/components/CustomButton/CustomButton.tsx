import React from "react";
import "./styles.scss";

export interface CustomButtomProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const CustomButtom: React.FC<CustomButtomProps> = (
  props: CustomButtomProps
) => {
  const { label, disabled, onClick } = props;
  const className = disabled ? "custom-button disabled" : "custom-button";

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export { CustomButtom };
