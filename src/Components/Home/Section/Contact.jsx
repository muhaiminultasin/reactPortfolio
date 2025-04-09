import React, { forwardRef, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import SectionTitle from "../../Common/SectionTitle";
import FindMe from "../../Common/FindMe";
import Buttons from "../../Common/Button";
import emailjs from "@emailjs/browser";

const Contact = forwardRef((props, ref) => {
  const contactRef = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(
        contactRef.current.querySelectorAll("h1,p,#content, #contentImage"),
        {
          x: 100,
          duration: 0.5,
          opacity: 0,
          scrollTrigger: {
            trigger: contactRef.current,
          },
          stagger: {
            each: 0.2,
          },
        }
      );
    }, contactRef);

    return () => context.revert();
  }, []);

  const form = useRef();
  const [notification, setNotification] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      setNotification("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_ipfiohq", "template_sv31x7k", form.current, {
        publicKey: "s3ImfKNeHWXnM9-Rm",
      })
      .then(
        setTimeout(() => {
          setNotification("Email sent successfully");
          if (form.current) {
            form.current.reset();
          }
        }, 1000),
        (error) => {
          console.log("FAILED....", error.text);
        }
      );
  };

  return (
    <section
      ref={ref}
      className="px-[20px] md:px-[50px] lg:px-[80px]  text-center pb-[100px]"
    >
      <SectionTitle title={"Contact Me"} subTitle={"CONTACT"} />

      <div
        ref={contactRef}
        className="lg:w-[80%] mx-auto text-start grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10   mt-10"
      >
        <div className=" bg-darkPrimary shadow-custom-dark  lg:max-w-[400px] p-5 rounded-md">
          <img
            src="img/handshake.jpg"
            className="rounded-sm h-[30%] w-full mx-auto "
            alt=""
          />

          <h1 className="text-primary text-[30px] font-[700] mt-5">
            TASIN MUHAIMINUL
          </h1>
          <p className="text-secondary text-[14px]">
            Junior Front-end Developer and Desinger
          </p>
          <p className="text-secondary text-[14px] mt-5 ">
            I'm available for freelance work . Contact me via Call or Email
          </p>

          <p className="text-secondary text-[14px] mt-5">
            Phone: <span>01794382332</span>
          </p>
          <p className="text-secondary text-[14px]">
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801794382332"
              target="_blank"
              className=" underline"
            >
              01794382332
            </a>
          </p>
          <p className="text-secondary text-[14px] mt-5">
            Email: <span>tasinmuhaiminul@gmail.com</span>
          </p>
          <div className="mt-10">
            <FindMe />
          </div>
        </div>

        <div className=" bg-darkPrimary shadow-custom-dark  p-5 rounded-md ">
          <h1 className="text-2xl text-primary font-semibold">
            Let me know how to get back to you
          </h1>
          <form action="" ref={form}>
            <div className="flex flex-col text-secondary">
              <label htmlFor="name" className="mt-4">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2"
              />
              <label htmlFor="phone" className="mt-4">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                className="bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2"
              />

              <label htmlFor="email" className="mt-4">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2"
              />

              <label htmlFor="subject" className="mt-4">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2"
              />

              <label htmlFor="message" className="mt-4">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-formDark py-1 px-4 outline-none border-black border-[2px] rounded-md mt-2 min-h-[120px]"
              ></textarea>
            </div>
            {notification && (
              <p className="text-primary text-[14px] mt-3">{notification}</p>
            )}

            <div className="  md:mt-6 mt-5">
              <Buttons
                name={"Send Message"}
                className="text-primary"
                onClick={sendEmail}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
