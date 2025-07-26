import React, { useEffect, useState } from "react";
import contact from "../assets/contact.svg";
import { IoHandLeft } from "react-icons/io5";

function Contact() {
  
  useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  let [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  let Handfun = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let submitHandler = (e) => {
    e.preventDefault();
    setformdata({
      name: "",
      email: "",
      message: "",
    });
    alert("Form-Submitted");
  };
  
  return (
    
    <section className="bg-white text-black w-full">
      <div className="max-w-[1350px] m-auto flex flex-col md:flex-row items-center justify-between lg:gap-10 gap-5 md:py-15 py-8 px-5 md:px-10">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <img
            src={contact}
            alt="contact Illustration"
            className="heroimage w-full h-auto object-contain "
          />
        </div>

        {/* right side */}
        <div className="w-full bg-[#1E4D42] md:bg-white md:w-1/2  flex flex-col p-6 items-cente rounded-sm hover:shadow-xl">
          <label
            htmlFor="Name"
            className="w-full md:max-w-[300px] md:m-auto text-white md:text-black my-1.5"
          >
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={Handfun}
              id="Name"
              className="bg-white w-full px-2 py-1.5 rounded-sm outline-none text-black md:border border-gray-300"
              placeholder="Enter Your Name"
            />
          </label>
          <label
            htmlFor="Name"
            className="w-full md:max-w-[300px] md:m-auto text-white md:text-black my-1.5"
          >
            Email:
            <br />
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={Handfun}
              id="Name"
              className="bg-white w-full px-2 py-1.5 rounded-sm outline-none text-black md:border border-gray-300"
              placeholder="Enter Your Email"
            />
          </label>
          <label
            htmlFor="Name"
            className="w-full md:max-w-[300px] md:m-auto text-white md:text-black my-1.5"
          >
            Message:
            <br />
            <textarea
              name="message"
              value={formdata.message}
              onChange={Handfun}
              id=""
              style={{ height: "100px" }}
              className="bg-white w-full px-2 py-1.5 rounded-sm outline-none text-black resize-none md:border border-gray-300"
              placeholder="Enter Your Message"
            ></textarea>
          </label>

          <button onClick={submitHandler} className="bg-[#3FAF7D] text-white px-6 py-2 w-1/2 m-auto mt-5 rounded-md hover:bg-[#329e6d] transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
