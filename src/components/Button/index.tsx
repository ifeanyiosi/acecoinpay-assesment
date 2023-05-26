/* eslint-disable  */
import classMerger from "../../utils/tailwindMerge";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import Spinner from "../../components/Spinner";

/**
 * This function defines the possible configurations the button component could take if applied.
 * It can also be used for other components as well in order to have a button like behaviour -
 * <Link className={buttonVariants({variant:'primary', size:'md', className:'all the styles you want to apply'})}>
 *    Link Button
 * </Link> - and this link element would appear exactly like a button
 */
export const buttonVariants = cva(
  "w-max flex items-center justify-center px-6 gap-3 border-none cursor-pointer hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transtion-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-1 text-primary-10 rounded-[6px]",
        primary:
          "text-white bg-primary hover:bg-choiceOne text-[14px]  rounded-[6px]",
        secondary:
          "text-black bg-secondary hover:bg-choiceTwo rounded-[6px] text-[14px] border-[1px] border-[#eaeaea] border-solid ",
        choiceOne: "bg-primary-10 text-gray-1 rounded-[6px] text-[14px]",
        choiceTwo: "text-gray-6 bg-gray-2 rounded-[6px] text-[14px]",
      },
      size: {
        default: "h-[40px]",
        xs: "h-[31px]",
        sm: "h-[37px]",
        md: "h-[61px]",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonTestProps {
  className: string;
  disabled: boolean;
  size: "default" | "xs" | "sm" | "md";
  variant?: "default" | "primary" | "secondary" | "choiceOne" | "choiceTwo";
  children?: ReactNode;
  isLoading?: boolean;
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, disabled, size, variant, children, isLoading, ...props },
  ref
) {
  return (
    <button
      disabled={disabled ?? isLoading}
      {...props} // this for anyother property or properties that isn't destructured above
      className={classMerger(buttonVariants({ className, variant, size }))}
      ref={ref}
    >
      {isLoading ? <Spinner classes="h-6 w-6" /> : children}
    </button>
  );
});
