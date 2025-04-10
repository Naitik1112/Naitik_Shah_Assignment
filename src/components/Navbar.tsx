
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-6 px-4 md:px-6 lg:px-12 flex items-center justify-between relative">
      <div className="flex items-center">
        <Link to="/" className="font-bold text-xl flex items-center">
          <span className="text-2xl mr-1">◼</span> Positivus
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/about" className="text-sm hover:text-positivus-green transition-colors">
          About us
        </Link>
        <Link to="/services" className="text-sm hover:text-positivus-green transition-colors">
          Services
        </Link>
        <Link to="/cases" className="text-sm hover:text-positivus-green transition-colors">
          Use Cases
        </Link>
        <Link to="/pricing" className="text-sm hover:text-positivus-green transition-colors">
          Pricing
        </Link>
        <Link to="/blog" className="text-sm hover:text-positivus-green transition-colors">
          Blog
        </Link>
      </div>
      
      <div className="hidden md:block">
        <Button variant="outline" className="border-2 border-black hover:bg-positivus-green hover:text-black hover:border-positivus-green transition-colors">
          Request a quote
        </Button>
      </div>
      
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-2xl"
          onClick={toggleMobileMenu}
        >
          ☰
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-6">
            <Link 
              to="/" 
              className="font-bold text-xl flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-2xl mr-1">◼</span> Positivus
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="p-1"
            >
              <X size={24} />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-6 items-start">
            <Link 
              to="/about" 
              className="text-lg font-medium hover:text-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/services" 
              className="text-lg font-medium hover:text-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/cases" 
              className="text-lg font-medium hover:text-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              to="/pricing" 
              className="text-lg font-medium hover:text-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="text-lg font-medium hover:text-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
          
          <div className="mt-auto">
            <Button 
              variant="outline" 
              className="w-full border-2 border-black hover:bg-positivus-green hover:text-black hover:border-positivus-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
