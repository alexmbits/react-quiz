import * as React from "react";

function Button({ color, children, cls, onClick }: ButtonProps) {
  const clr = color === undefined ? "btn-primary" : color === "green" ? "btn-green" : "btn-red"; // Need to write the full class name to prevent Tailwind from accidentally purging it.
  return (
    <button type="button" className={`btn ${clr} ${cls ? cls : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

type ButtonOwnProps = { color?: "red"; cls?: string } | { cls?: string; color?: "green" };
type ButtonProps = ButtonOwnProps & React.ComponentPropsWithoutRef<"button">;

export default Button;
