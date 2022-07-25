import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-gray-700 font-poppins flex-cols justify-between items-between text-gray-200 font-medium text-md py-16">
            <div className="container grid sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-4 justify-center items-center">
                <div>
                    <p>Join Mailing List</p>
                    <input type="email" required className="p-3 mt-3" placeholder="Your Email" />
                </div>
                <div>
                    <ul>
                        <li>Contact us</li>
                        <li className="mt-2">lekemorganics@gmai.com</li>
                        <li className="mt-2">+233 20 259 7538</li>
                        <li className="mt-2">Careers</li>
                        <li className="mt-2">Press</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Headquarters</li>
                        <li className="mt-2">123 Main Street Accra,</li>
                        <li className="mt-2">AC 20001</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li className="mt-2">Products</li>
                        <li className="mt-2">Blog</li>
                        <li className="mt-2">About us</li>
                        <li className="mt-2">Services</li>
                    </ul>
                </div>
            </div>
            <div className="container flex justify-between items-center mt-20">
                <p>&copy; 2022 Lekem's organics</p>
                <div className="flex justify-between items-center">
                    <p className="mx-3">Privacy Policy</p>
                    <p className="mx-3">{`Terms & Conditions`}</p>
                    <div className="ml-3">
                        <span className="mx-2"><FontAwesomeIcon icon={faLinkedinIn} style={{width: '15px', height: '15px'}} /></span>
                        <span className="mx-2"><FontAwesomeIcon icon={faFacebookF} style={{width: '15px', height: '15px'}} /></span>
                        <span className="mx-2"><FontAwesomeIcon icon={faTwitter} style={{width: '15px', height: '15px'}} /></span>
                        <span className="mx-2"><FontAwesomeIcon icon={faInstagram} style={{width: '15px', height: '15px'}} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;