import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../Title";

const Contact = () => {
  const [sent, setSent] = useState("");
  const [show, setShow] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zit8gsi",
        "template_0cn8tgb",
        form.current,
        "AF6mhvTtoafHhXBeP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent("Email sent!");
        },
        (error) => {
          console.log(error.text);
          setSent("Error! we couldn't send your email");
        }
      );
  };
  return (
    <div className=" h-screen flex p-3 flex-col justify-around items-center">
      <Title>Contact Me!</Title>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="  w-[70%] h-[80%] flex p-3 flex-col justify-around items-center"
      >
        <input
          className="input"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="subject"
          className="input"
          placeholder="Subject"
          required
        />
        <textarea
          className="input"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
          required
        ></textarea>
        <input
          type="submit"
          className="p-3 w-full rounded cursor-pointer bg-blue-500 font-semibold text-white hover:bg-blue-600 transition-all ring-0"
          value="Send"
        />
      </form>
      {sent ? (
        <span className="p-2 shadow-lg bg-blue-500 rounded text-white fixed bottom-2 right-2">
          {sent}
        </span>
      ) : null}
    </div>
  );
};

export default Contact;
