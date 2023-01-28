import React from "react";
import "./styles.scss";

export interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (prop: ProgressBarProps) => {
  const [progress, setProgress] = React.useState(0);
  const styleProgress = {
    width: `${progress}%`,
  };

  React.useEffect(() => {
    const valueInPercent = (prop.value * 100) / 100;
    if (valueInPercent <= 100) {
      setProgress(valueInPercent);
    }
  }, [prop]);

  return (
    <div className="container-progress-bar">
      <div style={styleProgress} className="progress-bar">
        <span className="progress-bar-value">{progress}%</span>
      </div>
    </div>
  );
};

export { ProgressBar };
