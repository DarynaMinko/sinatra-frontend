import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Label } from './Label';

const inputs = cva(
    'bg-white border-slate-400 box-border border outline-0 solid text-base font-normal leading-6  text-ellipsis pl-4 h-[45px] focus:border-black',
    {
        variants: {
            sized: {
                fullsized: 'w-[465px]',
                halfsized: 'w-52',
                thirdsized: 'w-32'
            }
        }
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputs> {
    children?: React.ReactNode;
    label?: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const { className, sized, placeholder, ...rest } = props;

    return (
        <div>
            <Label label={props.label}></Label>
            <input
                type="text"
                placeholder={placeholder}
                className={inputs({ sized, className })}
                {...rest}
            >
                {props.children}
            </input>
        </div>
    );
};
