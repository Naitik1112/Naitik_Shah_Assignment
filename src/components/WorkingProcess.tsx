
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState("01");
  
  const steps: ProcessStep[] = [
    {
      id: "01",
      number: "01",
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      id: "02",
      number: "02",
      title: "Research and Strategy Development",
      description: "Our team conducts thorough research on your industry, competitors, and target audience to develop a customized digital marketing strategy that aligns with your business goals."
    },
    {
      id: "03",
      number: "03",
      title: "Implementation",
      description: "Once the strategy is approved, our experts will implement the digital marketing tactics, setting up campaigns, optimizing your online presence, and creating content as needed."
    },
    {
      id: "04",
      number: "04",
      title: "Monitoring and Optimization",
      description: "We continuously monitor the performance of your digital marketing campaigns and make data-driven adjustments to optimize results and maximize your return on investment."
    }
  ];
  
  const toggleStep = (stepId: string) => {
    setActiveStep(activeStep === stepId ? "" : stepId);
  };
  
  return (
    <div className="px-4 md:px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="bg-positivus-green px-4 py-2 mb-2 inline-block w-fit text-lg font-semibold">
            Our Working Process
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        
        <div className="space-y-4 mt-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`rounded-3xl overflow-hidden border-2 transition-colors ${
                activeStep === step.id 
                  ? "bg-positivus-green border-black" 
                  : "bg-positivus-lightGray border-transparent"
              }`}
            >
              <div 
                className="flex items-center justify-between p-6 md:p-10 cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-center">
                  <div className="font-bold text-2xl md:text-3xl mr-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-black">
                  {activeStep === step.id ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </button>
              </div>
              
              {activeStep === step.id && (
                <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0">
                  <p className="text-base md:text-lg max-w-3xl">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
