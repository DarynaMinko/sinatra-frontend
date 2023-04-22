import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const texts = cva('', {
    variants: {
        sized: {
            xlBold: 'font-bold text-xl',
            xl: 'font-normal text-xl',
            largeBold: 'font-bold text-lg',
            large: 'font-normal text-lg',
            baseBold: 'font-bold text-base',
            base: 'font-normal text-base',
            small: 'font-normal text-sm',
            extraSmall: 'font-normal text-xs',
        },
        intent: {
            black: 'text-black',
            white: 'text-white',
            gray: 'text-gray-700',
        },
    },
});

export interface TextProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof texts> {
    children?: React.ReactNode;
    className?: string;
}

export const Input: React.FC<TextProps> = (props) => {
    const { className, sized, intent, ...rest } = props;

    return <div>mlml</div>;
};
