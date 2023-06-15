import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  ...PROPS
}) => {
  if (!className) className = "";
  className +=
    " bg-secondary w-80 duration-500  text-nohemi rounded-xl hover:shadow-button-glow hover:shadow-secondary hover:duration-500 ";

  return (
    <button {...PROPS} onClick={onClick} className={className}>
      {children}{" "}
    </button>
  );
};

export default Button;
