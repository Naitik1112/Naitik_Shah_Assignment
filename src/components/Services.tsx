
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center mb-10 md:mb-14">
          <div className="bg-positivus-green px-4 py-2 mb-4 md:mb-0 md:mr-8 inline-block w-fit text-lg font-semibold">
            Services
          </div>
          <p className="text-base md:text-lg max-w-2xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-positivus-lightGray rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="bg-positivus-green px-4 py-2 mb-6 inline-block w-fit text-lg font-semibold">
              Search engine optimization
            </div>
            <div className="flex justify-between items-end">
              <div className="max-w-[50%]">
                <Button variant="ghost" className="group p-0 h-auto font-semibold">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="group-hover:underline">Learn more</span>
                  </div>
                </Button>
              </div>
              <div className="w-[40%] relative h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                  </div>
                  <div className="absolute top-1/4 right-1/4 text-lg">✦</div>
                  <div className="absolute bottom-1/4 left-1/4 text-lg">✦</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-positivus-green rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="bg-positivus-green border border-black px-4 py-2 mb-6 inline-block w-fit text-lg font-semibold">
              Pay-per-click advertising
            </div>
            <div className="flex justify-between items-end">
              <div className="max-w-[50%]">
                <Button variant="ghost" className="group p-0 h-auto font-semibold">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="group-hover:underline">Learn more</span>
                  </div>
                </Button>
              </div>
              <div className="w-[40%] relative h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-16 border-2 border-black rounded-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full absolute -right-2 -top-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
