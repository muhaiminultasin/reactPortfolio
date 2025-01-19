import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJsSquare, FaReact, FaGithub } from "react-icons/fa";
import PricingTbas from "../../Common/PricingTbas";

const skills = [
  { name: "HTML 5", icon: <FaHtml5 className="text-[40px] text-primary mb-2"/> },
  { name: "CSS 3", icon: <FaCss3Alt className="text-[40px] text-primary mb-2"/> },
  { name: "BOOTSTRAP 5", icon: <FaBootstrap className="text-[40px] text-primary mb-2"/> },
  { name: "Tailwind CSS", icon: null }, // React Icons doesn't have Tailwind-specific icons
  { name: "SASS", icon: <FaSass className="text-[40px] text-primary mb-2"/> },
  { name: "JAVASCRIPT", icon: <FaJsSquare className="text-[40px] text-primary mb-2"/> },
  { name: "REACT JS", icon: <FaReact className="text-[40px] text-primary mb-2"/> },
  { name: "NEXT JS", icon: null }, // React Icons doesn't have Next.js-specific icons
  { name: "GITHUB", icon: <FaGithub className="text-[40px] text-primary mb-2"/> },
];

const ExpertiseSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10">
      {/* Pricing Tabs Section */}
      <div className="lg:w-1/2 px-4 py-10 md:px-12">
      <h2 className=" text-secondary text-center lg:text-start font-semibold text-[25px] md:text-[36px]">
          Pricing and Values
        </h2>
        <PricingTbas />
      </div>
      
      {/* Expertise Section */}
      <div className="flex flex-col justify-center gap-10 px-4 py-10 md:px-12 lg:w-1/2">
        <h2 className=" text-secondary text-center lg:text-start font-semibold text-[25px] md:text-[36px]">
          Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map(({name, icon},index) => (
            <div
              key={index}
              className="bg-darkPrimary shadow-custom-dark rounded-lg flex flex-col items-center justify-center w-[150px] h-[150px]">

                <div className="w-[40px]">
                  {icon}
                </div>
              
              <p className="text-white font-semibold text-[18px] md:text-[16px] text-center">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExpertiseSection;
