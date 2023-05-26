import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
    const socialLinkHandler = (link) => {
        Swal.fire({
            title: 'It just a Demo link',
            text: "if you interested to visit my own facebook account !! Just hit the Go button",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(link)
            }
        })
    }
    return (
        <footer className="footer footer-center p-10 bg-[#4e4c4c] mt-40 text-white font-semibold rounded">
            <div>
                <Link to='/' className="btn btn-ghost normal-case text-pr text-3xl">Sports-Toys</Link>
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link to='' className="link link-hover">About us</Link>
                <Link to='' className="link link-hover">Contact</Link>
                <Link to='/all_toys' className="link link-hover">All Toys</Link>
                <Link to='' className="link link-hover"></Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer" onClick={() => socialLinkHandler('https://web.facebook.com/Khalid.hotsot')} size={40}></FaFacebook>
                    <FaTwitter className="hover:text-blue-500 cursor-pointer" size={40}></FaTwitter>
                    <FaYoutube className="hover:text-red-500 cursor-pointer" size={40}></FaYoutube>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Khalid</p>
            </div>
        </footer>
    );
};

export default Footer;