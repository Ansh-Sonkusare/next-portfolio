import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> { }

const Button: FunctionComponent<ButtonProps> = ({ children,  className , onClick , ...PROPS} ) => {
    if (!className) className = "";
    className +=
        " bg-secondary w-96  text-nohemi rounded-xl  ";

    
    return <button {...PROPS } onClick={onClick} className={className}>{children} </button>;
};

export default Button;
