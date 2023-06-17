import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  ...PROPS
}) => {
  if (!className) className = "";

  return (
    <button {...PROPS} onClick={onClick} className={cn(" bg-secondary w-64 duration-500  text-nohemi rounded-xl hover:shadow-button-glow hover:shadow-secondary hover:duration-500 ",className)}>
      {children}{" "}
    </button>
  );
};

export default Button;
