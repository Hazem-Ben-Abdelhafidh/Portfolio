import React from "react";
import Title from "../Title";

const Contact = () => {
  return (
    <div className=" h-screen flex p-3 flex-col justify-around items-center">
      <Title>Contact Me!</Title>
      <form
        action=""
        className="  w-[70%] h-[80%] flex p-3 flex-col justify-around items-center"
      >
        <input className="input" type="text" placeholder="Name" required />
        <input className="input" type="email" placeholder="Email" required />
        <input
          type="subject"
          className="input"
          placeholder="Subject"
          required
        />
        <textarea
          className="input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
      </form>
    </div>
  );
};

export default Contact;
