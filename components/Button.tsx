import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> { }

const Button: FunctionComponent<ButtonProps> = ({ children,  className , onClick , ...PROPS} ) => {
    if (!className) className = "";
    className +=
        " bg-secondary w-72 font-bold text-nohemi rounded-lg  ";

    
    return <button {...PROPS } onClick={onClick} className={className}>{children} </button>;
};

export default Button;
