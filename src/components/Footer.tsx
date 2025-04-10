
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-positivus-darkBg text-white">
      <div className="px-4 md:px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <Link to="/" className="font-bold text-xl flex items-center mb-6">
              <span className="text-2xl mr-1">◼</span> Positivus
            </Link>
            
            <div className="bg-positivus-green text-black px-4 py-2 rounded-xl inline-block mb-6">
              <Link to="/contact" className="font-semibold">
                Contact us
              </Link>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St,</p>
              <p>Moonstone City, Starlight State 12345</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            <div>
              <Link to="/about" className="block mb-3 hover:text-positivus-green transition-colors">
                About us
              </Link>
              <Link to="/services" className="block mb-3 hover:text-positivus-green transition-colors">
                Services
              </Link>
              <Link to="/cases" className="block mb-3 hover:text-positivus-green transition-colors">
                Use Cases
              </Link>
              <Link to="/pricing" className="block mb-3 hover:text-positivus-green transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="block hover:text-positivus-green transition-colors">
                Blog
              </Link>
            </div>
            
            <div className="md:ml-auto">
              <div className="mb-6">
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 focus:outline-none w-full max-w-[200px]" 
                  />
                  <Button className="bg-positivus-green text-black hover:bg-positivus-green/80 rounded-l-none">
                    Subscribe to news
                  </Button>
                </form>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-positivus-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-positivus-green transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-positivus-green transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div>© 2023 Positivus. All Rights Reserved.</div>
          <div className="mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-positivus-green transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
