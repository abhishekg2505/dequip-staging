import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "text-[12px] sm:text-p2 w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full  font-medium leading-relaxed transition1-colors duration1-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "px-[20px] py-[10px] bg-[linear-gradient(164.66deg,_#FFFFFF_10.76%,_#999999_121.23%)] hover:bg-none hover:bg-[#ffffff] text-[#000000] border border-[rgba(255,255,255,0.1)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline:
          "px-[20px] py-[10px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] bg-background",
      },
      size: {
        default: "",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
