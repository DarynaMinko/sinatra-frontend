import React from "react";
import { cva, type VariantProps } from "class-variance-authority";


// const buttonStyles = (rest) => className(rest.className, "px-8 py-3 b", {
//   "bg-black text-lime-900":
//       type === "primary",
//   "bg-teal-600 text-purple-900 border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black":
//       type == "secondary"
// });



const button = cva("px-8 py-3 b", {
  variants: {
    intent: {
      primary: "bg-green-500 text-white border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black",
      secondary: "bg-red-500",
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
      children?: React.ReactNode;
    };

export const Button: React.FC<ButtonProps> = (props) => { 

  const {
    className,
    intent,
    size,
    ...rest
  } = props;

  return(
  <button className={button({ intent, size, className })} {...rest}>{props.children}</button>
  )
};



export default Button;
//className="px-8 py-3 background-color: rgb(49 46 129) text-white border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black"
//className="px-8 py-3 bg-black text-white border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black"

//     ? "px-8 py-3 bg-black text-white border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black"
//     : null,
// type === "secondary"
//     ? "px-8 py-3 bg-teal-600 text-white border font-black text-center text-xs hover:bg-white hover:text-black hover:border-black"
//     : null
