import { useState } from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log(fullname, email, subject, message);
  };

  return (
    <div className="px-4 flex flex-col md:flex-row md:mt-12">
      <div className="md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg flex flex-col px-8 py-8 bg-gray-100 shadow-cyan-600 shadow-lg"
        >
          <h1 className="text-2xl bg-gray-100 font-bold">
            Let us know how we can help.
          </h1>

          <label
            htmlFor="fullname"
            className="bg-gray-100 text-gray-500 font-bold mt-8"
          >
            Full name<span className="text-red-500 bg-gray-100">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="rounded bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-cyan-400 font-light text-gray-500"
          />

          <label
            htmlFor="email"
            className="text-gray-500 bg-gray-100 font-bold mt-4"
          >
            E-mail<span className="text-red-500 bg-gray-100">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-cyan-400 font-light text-gray-500"
          />

          <label
            htmlFor="subject"
            className="text-gray-500 bg-gray-100 font-bold mt-4"
          >
            Subject<span className="text-red-500 bg-gray-100">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="rounded bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-cyan-400 font-light text-gray-500"
          />

          <label
            htmlFor="message"
            className="text-gray-500 bg-gray-100 font-bold mt-4"
          >
            Message<span className="text-red-500 bg-gray-100">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="rounded bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-cyan-400 font-light text-gray-500"
          ></textarea>

          <div className="flex flex-row items-center justify-start bg-gray-100">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-700 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-sm my-3 px-8 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="my-4 md:w-1/2 md:flex md:justify-center md:my-8">
        <div className="w-full text-center space-y-4 md:space-y-10">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-3xl md:text-4xl">
            Contact Us
          </h1>
          <div className="flex flex-col space-y-4 md:space-y-8 items-center justify-center">
            <div className="flex flex-col space-y-4 items-center justify-around w-1/2">
              <HiPhone className="text-cyan-500 hover:text-gray-400 hover:cursor-pointer text-5xl bg-transparent" />
              <h2 className="text-white text-2xl bg-transparent">
                972-123-1234
              </h2>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-around w-1/2">
              <HiMail className="text-cyan-500 hover:text-gray-400 hover:cursor-pointer text-5xl bg-transparent" />
              <h2 className="text-white text-2xl bg-transparent">
                support@senjinsolutions.com
              </h2>
            </div>
            <div className="flex space-x-4 items-center justify-center w-1/2">
              <AiFillInstagram className="text-cyan-500 hover:text-gray-400 hover:cursor-pointer text-5xl bg-transparent" />
              <AiFillFacebook className="text-cyan-500 hover:text-gray-400 hover:cursor-pointer text-5xl bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
