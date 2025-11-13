
import { FaFacebook, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../../../public/logo.png'
// import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="px-4 lg:px-10  divide-y dark:bg-gray-900 dark:text-white">
	<div className="max-w-[1470px pt-22 lg:pt-52 flex flex-col justify-between pb-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="/" className="flex justify-center space-x-2 lg:justify-start">
				<div className="flex items-center justify-center">
          <img src={logo} alt="logo" />
					
				</div>
				<span className="self-center text-2xl font-bold">SkillBay</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-white">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-white">Social media</div>
				<div className="flex justify-start space-x-3 ">
					<Link to='/'>
					<FaFacebook className='w-6 h-6'/>
					</Link>
					
					<Link to='/'>
					<FaXTwitter  className='w-6 h-6'/>
					</Link>
					
					<Link to='/'>
					<FaLinkedin className='w-6 h-6'/>
					</Link>
					
					
					
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-600"> © {new Date().getFullYear()} SkillBay All rights reserved.</div>
  
</footer>
  );
};

export default Footer;
