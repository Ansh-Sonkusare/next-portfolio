import { FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLParagraphElement> {
    
}
 
const Button: FunctionComponent<ButtonProps > = ({children}) => {
           
            return (   <button className='bg-secondary w-72 font-bold text-nohemi p-3 mt-12 rounded-lg mx-12'>{children} </button> );
}
 
export default Button;