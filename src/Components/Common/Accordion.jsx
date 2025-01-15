import React, { useState } from "react";

function Accordion({ ques, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-darkSecondary px-5 rounded-xl max-w-[600px]   mx-auto">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full p-3 font-[500]  rounded-lg text-white bg-darkPrimary text-start"
      >
        <span>{ques}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className=" p-2 grid overflow-hidden transition-all duration-300 shadow-custom-dark">
          <p className="text-gray-400 text-[14px] ">{ans}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
