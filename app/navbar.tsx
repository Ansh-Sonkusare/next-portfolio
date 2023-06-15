import { FunctionComponent, HTMLAttributes } from "react"

interface NavbarProps extends HTMLAttributes<HTMLDivElement>{
    
}
 


const Navbar: FunctionComponent<NavbarProps> = ({className}) => {
    return (
        <div className={className}>

            <nav className="flex mt-5  justify-between items-center max-w-[1360px] mx-auto p-4 ">

                <div className="logo font-logo text-4xl"> <span className="text-secondary">T</span>eak<span className="text-secondary">M</span>irror </div>


                <ul className="font-light text-2xl font-nohemi  flex-row p-4 md:p-0 md:flex hidden  md:space-x-4  ">

                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-secondary" >Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 ">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 ">Contact</a>
                    </li>
                </ul>


            </nav>

        </div>
    )
}

export default Navbar;