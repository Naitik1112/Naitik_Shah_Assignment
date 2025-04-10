
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Play, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Navigating the digital landscape for success
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-xl">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Button className="bg-black text-white hover:bg-positivus-green hover:text-black transition-colors">
          Book a consultation
        </Button>
      </div>
      
      <div className="w-full lg:w-1/2 relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <img 
            src="/uploads/7cb2f838-a95d-4830-89ef-17887ac176c8.png" 
            alt="Digital Marketing Illustration" 
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
