import React from "react";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import Github from "../assets/Github.png"
const Contact = () => {
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>

            <h1 className="text-red-500 text-4xl font-bold">Contact Me</h1>
            <br />
            <div className="flex items-center space-x-4">
              <span>
                <a
                  href="https://www.linkedin.com/in/hemant-patel2001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className="h-16" alt="LinkedIn" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/hemant-patel2001/"
                  target="_blank"
                  className="text-white font-medium"
                >
                  https://www.linkedin.com/in/hemant-patel2001/
                </a>
              </span>
            </div>
            <br />
            <div className="flex items-center gap-4 ml-3 ">
              <img src={email} className="h-8 " />  
              <span className="text-white font-medium"> hemantpatel4326@gmail.com</span>
            </div> 
            <br />
            <div className="flex gap-2 items-center  ">
               
              <img src={Github} className="h-14 ml-1"/>
              <a href="https://github.com/hemantpatel2001" className="text-white font-medium"> https://github.com/hemantpatel2001</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
