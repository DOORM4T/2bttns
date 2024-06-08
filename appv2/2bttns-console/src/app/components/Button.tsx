import React from "react";
import classnames from "classnames";

export type ButtonVariant = "outlined";

export type ButtonProps = {
  children: JSX.Element | string;
  onClick: () => void;
  variant?: ButtonVariant;
};

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button
      className={classnames("btn", {
        "btn-outline": variant === "outlined",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
