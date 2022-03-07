import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  onClick: () => React.MouseEvent<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { label, style, onClick } = props;
  return (
    <button data-testid="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
