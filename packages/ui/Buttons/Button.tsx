import React, { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {}

export function Button({ children, ...rest }: ButtonProps) {
    return <button {...rest}>{children}</button>;
}
