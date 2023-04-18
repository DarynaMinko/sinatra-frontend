import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('text-center border', {
    variants: {
        intent: {
            primary:
                'bg-black text-white font-black hover:bg-white hover:text-black hover:border-black',
            primary_header:
                'bg-white text-black border-black font-black hover:bg-black hover:text-white hover:border-black',
            secondary:
                'bg-[#38B1AD] text-white font-black hover:bg-white hover:text-[#38B1AD] hover:border-[#38B1AD]',
        },
        size: {
            small: ['text-xs', 'py-3', 'px-3'],
            medium: ['text-base', 'py-3', 'px-4'],
        },
    },
    compoundVariants: [{ intent: 'primary', size: 'medium' }],
    defaultVariants: {
        intent: 'primary',
        size: 'small',
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };
    const { className, intent, size, ...ButtonProps } = props;

    return (
        <button
            onSubmit={submitHandler}
            className={button({ intent, size, className })}
            {...ButtonProps}
        >
            {props.children}
        </button>
    );
};
