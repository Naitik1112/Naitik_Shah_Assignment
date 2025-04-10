
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director",
      company: "XYZ Corp"
    },
    {
      id: 2,
      text: "Positivus transformed our digital strategy completely. Their SEO expertise helped us rank for competitive keywords, and their PPC campaigns generated an impressive ROI. Their team is knowledgeable, creative, and a pleasure to work with.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Innovate Tech"
    },
    {
      id: 3,
      text: "Working with Positivus has been a game-changer for our online visibility. Their social media strategies helped us connect with our audience in meaningful ways, resulting in higher engagement and conversion rates. Highly recommended!",
      author: "Michael Brown",
      position: "Sales Manager",
      company: "Global Solutions"
    },
    {
      id: 4,
      text: "The results we've seen since partnering with Positivus are nothing short of amazing. Their data-driven approach to digital marketing has helped us reduce costs and increase conversions. The entire team is proactive and dedicated to our success.",
      author: "Emily Davis",
      position: "E-commerce Director",
      company: "Retail Plus"
    },
    {
      id: 5,
      text: "Positivus stands out from other agencies we've worked with. Their transparency, attention to detail, and willingness to go the extra mile have made them an invaluable partner. Our online presence has grown exponentially since we started working together.",
      author: "David Wilson",
      position: "CMO",
      company: "Tech Innovations"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="px-4 md:px-6 lg:px-12 py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="bg-positivus-green px-4 py-2 mb-2 inline-block w-fit text-lg font-semibold">
            Testimonials
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
        
        <div className="relative bg-positivus-darkBg rounded-3xl p-6 md:p-10 animate-scale-in">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="basis-full"
                >
                  <div className="h-full">
                    <div className="h-full border border-positivus-green rounded-2xl p-4 md:p-6 flex flex-col">
                      <p className="text-white text-sm md:text-base mb-4 flex-grow">
                        "{testimonial.text}"
                      </p>
                      <div className="text-positivus-green mt-auto">
                        <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm">{testimonial.position} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-white/10 text-white"
            />
            <CarouselNext 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-white/10 text-white"
            />
          </Carousel>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-positivus-green" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
