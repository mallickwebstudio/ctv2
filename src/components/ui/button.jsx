import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex justify-center items-center disabled:opacity-50 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 font-semibold text-lg whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary:
          "bg-dark text-dark-foreground hover:bg-dark-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-active hover:text-active-hover underline-offset-4 hover:underline",
        outline:
          "border border-dark-hover bg-background hover:bg-dark-hover hover:text-background",
        outlineSecondary:
          "border border-dark-hover bg-background hover:bg-secondary",
        outlineSecondaryLight:
          "border border-light bg-background hover:bg-secondary",
        outlineIcon:
          "border border-input aspect-square bg-background hover:bg-dark-hover hover:text-background",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        cta: "px-8 py-4 text-lg lg:text-xl",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
