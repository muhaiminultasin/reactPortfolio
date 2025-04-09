import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { AiOutlineProfile } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { GiCompanionCube } from "react-icons/gi";
import SectionTitle from "../../Common/SectionTitle";

const Services = forwardRef((props, ref) => {
  const servicesRef = useRef();


  const setRefs = (el) => {
    servicesRef.current = el;
    if (typeof ref === "function") {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  };

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(servicesRef.current.querySelectorAll("h1,p,#items"), {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: servicesRef.current,
        },
        stagger: {
          each: 0.2,
        },
      });
    }, servicesRef);

    return () => context.revert();
  }, []);

  const services = [
    {
      img: <IoBookSharp className="text-primary my-3 text-[30px]" />,
      title: "Landing Page Development ",
      desc: "Professional Landy specializes in designing effective and visually appealing landing pages. If you don't have a design, I can create a custom solution based on your needs.",
    },
    {
      img: <AiOutlineProfile className="text-primary my-3 text-[30px]" />,
      title: "Personal Portfolio ",
      desc: "Transform Your Personal Portfolio with Expert Design and Development Services! Whether you have a stunning Figma layout or a polished PSD design, I'm here to bring your vision to life. Let's create something extraordinary together! ",
    },
    {
      img: <GiCompanionCube className="text-primary my-3 text-[30px]" />,
      title: "React Js based single page applications",
      desc: "React JS-based single-page applications (SPAs) are dynamic web applications that load a single HTML file and update content on the fly. They offer a fast, interactive user experience by utilizing reusable components and efficient state management, mimicking the feel of native apps for run your business smoothly.",
    },
  ];

  return (
    <section
      id="services"
      ref={setRefs} // Now using 'setRefs' for combined ref functionality
      className="px-[20px] md:px-[50px] lg:px-[80px]"
    >
      <SectionTitle title={"What I Do"} subTitle={"FEATURES"} />

      <div
        id="items"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5"
      >
        {services.map(({ img, title, desc }, i) => (
          <button
            key={i}
            className="max-w-[400px] h-auto flex flex-col items-start bg-darkPrimary shadow-custom-dark p-5 rounded-lg mt-5 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300 text-start"
          >
            <div>{img}</div>
            <h1 className="text-[25px] font-[500]">{title}</h1>
            <p className="font-[300] text-secondary mt-5">{desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
});

export default Services;
