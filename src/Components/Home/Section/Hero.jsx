import { React, useEffect, useRef,forwardRef } from "react";
import { gsap } from "gsap";
import FindMe from "../../Common/FindMe";
import Buttons from "../../Common/Button";

const Hero = forwardRef((props, ref ) => {
  const heroRef = useRef();

  const setRefs = (el) => {
    heroRef.current = el;
    if (typeof ref === "function") {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  };

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll("p, h1"), {
        x: 100,
        duration: 0.5,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={setRefs}
      className="w-full px-[20px] md:px-[50px] lg:px-[80px] pt-[100px]  xl:pt-[160px] pb-[20px] grid grid-cols-1 lg:grid-cols-2"
    >
      <div>
        <p className="text-base font-[300]  text-white">Hi, I'm </p>
        <h1 className="text-primary text-[40px] font-[700] leadin">
          TASIN MUHAIMINUL
        </h1>
        <h1 className="font-[500] text-[30px] text-white max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] leading-[40px]">
          Front-end website developer with React.js
        </h1>
        <p className="text-secondary mt-5">
          As a confident front-end developer, I craft stunning web interfaces
          that engage users. Proficient in HTML, CSS, Tailwind, and Bootstrap, I
          create responsive layouts with ease. I use JavaScript, ReactJS, and
          NextJS to build dynamic web applications, enhanced by smooth
          animations from GSAP and Framer Motion. I'm committed to transforming
          your ideas into standout digital experiences that drive success.
        </p>

        <div className=" mt-10 md:mt-20 flex justify-between items-end sm:justify-start sm:gap-20">
          <FindMe />
          <Buttons
            name={"View My Work"}
            className="text-primary"
            onClick={props.onClick}
          />
        </div>
      </div>
      <div></div>
    </section>
  );
});

export default Hero;
