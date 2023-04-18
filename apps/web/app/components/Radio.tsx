import React, { useState } from "react";
import { Label } from "./Label";

export interface RadioProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    value: string;
    checked: boolean;
}

export const Radio: React.FC<RadioProps> = (props) => {
    const { checked, value, name, label, ...radioProps } = props;
    const [selected, setSelected] = useState(false);

    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.checked);
    };
    return (
        <div>
            <Label label={props.label}></Label>
            <input
                className="accent-[#38B1AD] rounded-full absolute solid block w-5 h-5 left-9 leading-5"
                checked={selected}
                onChange={radioHandler}
                type="radio"
                id="7889"
                {...radioProps}
            />
        </div>
    );
};
