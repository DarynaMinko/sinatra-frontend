import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const labels = cva(
    "text-black box-border flex leading-6 mb-1 text-left cursor-default basis-full w-[480px] h-6 ",
    {
        variants: {
            intent: {
                normal: "text-black text-base mt-4 mr-12 mb-0 ml-0 inline-flex font-normal relative w-24 basis-full",
                bold: "font-bold",
                boldObligatory:
                    "font-bold after:content-['*'] after:ml-0.5 after:text-[#38B1AD]"
            },
            sized: {
                small: "text-black",
                medium: "text-black"
            }
        },
        compoundVariants: [{ intent: "boldObligatory", sized: "medium" }],
        defaultVariants: {
            intent: "boldObligatory",
            sized: "medium"
        }
    }
);

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labels> {
    label?: string;
    children?: React.ReactNode;
}

export const Label: React.FC<LabelProps> = (props) => {
    const { className, intent, sized, label, ...LabelProps } = props;

    return (
        <div>
            <label
                className={labels({ intent, sized, className })}
                {...LabelProps}
            >
                {label}
            </label>
        </div>
    );
};
