// Footer.jsx
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../../public/logo.png';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-10 divide-y dark:bg-gray-900 bg-white dark:text-gray-200 text-gray-800">
      <div className="max-w-[1470px] pt-22 lg:pt-52 flex flex-col justify-between pb-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to="/" className="flex justify-center space-x-2 lg:justify-start">
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </div>
            <span className="self-center text-2xl font-bold">
              SkillBay
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold  ">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/features" className="">Features</Link>
              </li>
              <li>
                <Link to="/integrations" className="">Integrations</Link>
              </li>
              <li>
                <Link to="/pricing" className="">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold  ">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className=" ">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className=" ">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-semibold  ">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/api" className=" ">Public API</Link>
              </li>
              <li>
                <Link to="/documentation" className=" ">Documentation</Link>
              </li>
              <li>
                <Link to="/guides" className=" ">Guides</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-semibold  ">Social media</div>
            <div className="flex justify-start space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" ">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" ">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" ">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400 text-gray-600">
        © {new Date().getFullYear()} SkillBay All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;