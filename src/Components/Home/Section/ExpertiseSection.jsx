import React from "react";
import PricingTbas from "../../Common/PricingTbas";

const skills = [
  { name: "HTML 5", icon: "fa-html5" },
  { name: "CSS 3", icon: "fa-css3" },
  { name: "BOOTSTRAP 5", icon: "fa-bootstrap" },
  { name: "Tailwind CSS", icon: null },
  { name: "SASS", icon: "fa-sass" },
  { name: "JAVASCRIPT", icon: "fa-square-js" },
  { name: "REACT JS", icon: "fa-react" },
  { name: "NEXT JS", icon: null },
  { name: "GITHUB", icon: "fa-github" },
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg flex flex-col items-center justify-center w-[150px] h-[150px]"
            >
              {skill.icon && (
                <i
                  className={`fa-brands ${skill.icon} text-white text-[30px] md:text-[50px]`}
                ></i>
              )}
              <p className="text-white font-semibold text-[18px] md:text-[16px] text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExpertiseSection;
