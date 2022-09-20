import { useState } from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export const Contact = () => {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.error(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div className="flex flex-row mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-16 lg:px-8">
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
            className="rounded bg-white border-1 py-2 pl-4 ring-tertiary focus:outline-none focus:rounded-md ring-1 focus:ring-primary font-light text-gray-500"
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
            className="rounded bg-white border-1 py-2 pl-4 ring-tertiary focus:outline-none focus:rounded-md ring-1 focus:ring-primary font-light text-gray-500"
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
            className="rounded bg-white border-1 py-2 pl-4 ring-tertiary focus:outline-none focus:rounded-md ring-1 focus:ring-primary font-light text-gray-500"
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
            className="rounded bg-white border-1 py-2 pl-4 ring-tertiary focus:outline-none focus:rounded-md ring-1 focus:ring-primary font-light text-gray-500"
          ></textarea>

          <div className="flex flex-row items-center justify-start bg-gray-100">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-700 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-sm my-3 px-8 py-2.5 text-center mr-2 mb-2"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      <div className="my-10 md:w-1/2 md:flex md:justify-center">
        <div className="w-full text-center space-y-4 md:space-y-10">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-100 sm:text-3xl md:text-4xl">
            Contact Us
          </h1>
          <div className="flex flex-col space-y-4 md:space-y-8 items-center justify-center">
            <div className="flex flex-col space-y-4 items-center justify-around w-1/2">
              <HiPhone className="text-primary hover:text-tertiary hover:cursor-pointer text-5xl bg-transparent" />
              <h2 className="text-white text-2xl bg-transparent">
                972-123-1234
              </h2>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-around w-1/2">
              <HiMail className="text-primary hover:text-tertiary hover:cursor-pointer text-5xl bg-transparent" />
              <h2 className="text-white text-2xl bg-transparent">
                support@senjinsolutions.com
              </h2>
            </div>
            <div className="flex space-x-4 items-center justify-center w-1/2">
              <AiFillInstagram className="text-primary hover:text-tertiary hover:cursor-pointer text-5xl bg-transparent" />
              <AiFillFacebook className="text-primary hover:text-tertiary hover:cursor-pointer text-5xl bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
