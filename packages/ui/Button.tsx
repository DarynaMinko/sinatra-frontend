import React, { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 h-16 w-16">
            {children}
        </button>
    );
};
