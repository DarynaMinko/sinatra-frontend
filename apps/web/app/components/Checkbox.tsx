import React, { useState } from 'react';
import { Label } from './Label';

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    value: string;
    checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { checked, value, name, label, ...checkBoxProps } = props;
    const [selected, setSelected] = useState(false);

    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.checked);
    };
    return (
        <div>
            <Label label={props.label}></Label>
            <input
                className=" accent-[#38B1AD] rounded-none w-7 h-7 left-10 absolute block solid rounded-t-none"
                checked={selected}
                onChange={checkBoxHandler}
                type="checkbox"
                {...checkBoxProps}
            />
        </div>
    );
};
