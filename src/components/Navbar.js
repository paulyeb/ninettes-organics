import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="lg:py-8 py-7 font-poppins w-full fixed top-0 bg-white">
            <div className="container flex justify-between items-center">
                {/* <div>
                    Name
                </div> */}
                <div className="flex items-center justify-center">
                    <img src="images/logo.png" alt="Lekem's organics" className="object-cover w-10 h-10 lg:w-20 lg:h-20" />
                    <legend className="lg:text-5xl text-2xl font-medium mx-2">Lekem's Organics</legend>
                </div>
                <div className="">
                    <ul className="hidden lg:flex justify-center items-center">
                        <li className="mx-3">Home</li>
                        <li className="mx-3">About us</li>
                        <li className="mx-3">Products</li>
                        <li className="mx-3">Services</li>
                        <li className="mx-3">Blog</li>
                        <li className="mx-3">Contact us</li>
                    </ul>
                    <button><FontAwesomeIcon className="lg:hidden inline" icon={faBars} style={{height: '20px', width: '20px'}} /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;