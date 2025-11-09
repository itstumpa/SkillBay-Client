
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-indigo-50 via-white to-indigo-50 pt-2 lg:pt-30 text-base-content ">
      <div className="container mx-auto px-4 py-10 max-w-10/12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">SearchSkill</h3>
            <p className="text-sm">
              A local skill exchange platform where you can learn, teach, and trade skills with people in your community.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>Email: info@searchskill.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Skill Street, Learn City, LC 12345</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary">Home</Link>
              <Link to="/about" className="block hover:text-primary">About Us</Link>
              <Link to="/privacy" className="block hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} SearchSkill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
