import { component$ } from "@builder.io/qwik";
import { cva } from "class-variance-authority";

export const buttonStyles = cva(["font-semibold", "border"], {
    variants: {
        intent: {
            // primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
            // **or**
            primary:
                "bg-blue-500 text-white border-transparent hover:bg-blue-600",
            secondary:
                "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"]
        }
    },
    compoundVariants: [
        {
            intent: "primary",
            size: "medium",
            class: "uppercase"
        }
    ],
    defaultVariants: {
        intent: "primary",
        size: "medium"
    }
});

type ButtonProps = {
    readonly intent?: "secondary" | "primary";
    readonly size?: "small" | "medium";
};

export const Button = component$(({ intent }: ButtonProps) => {
    return <button class={buttonStyles({ intent })}>lasdkjflakj</button>;
});
