import * as React from "react";
declare function Button({ color, children, cls, onClick }: ButtonProps): JSX.Element;
declare type ButtonOwnProps = {
    color?: "red";
    cls?: string;
} | {
    cls?: string;
    color?: "green";
};
declare type ButtonProps = ButtonOwnProps & React.ComponentPropsWithoutRef<"button">;
export default Button;
