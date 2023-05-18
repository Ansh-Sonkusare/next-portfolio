export default function Navbar() {
    return (
        <>

            <nav className="flex mt-5  justify-between items-center max-w-7xl mx-auto p-4 ">

                <div className="logo font-logo text-[32px]"> <span className="text-secondary">T</span>eak<span className="text-secondary">M</span>irror </div>


                <ul className="font-normal text-[18px] font-nohemi flex flex-row p-4 md:p-0  md:space-x-4  ">

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

        </>
    )
}
