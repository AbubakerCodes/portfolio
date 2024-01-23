import React, { useState, useEffect } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const BASE_URL = "https://portfolio-server-c9ri.onrender.com";


export function Contact() {
  const [userMessage, setUserMessage] = useState({ email: "", message: "" });
  const [validEmail, setValidEmail] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(true);
  const [loading, setLoading] = useState(false);


  function handleInputChange(e) {
      setUserMessage(prevVal => ({ ...prevVal, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    const result = validateEmail(userMessage.email);
      setValidEmail(result);
  },[userMessage.email]);

  async function handleFormSubmission(e) {
    e.preventDefault();
    
    const options = {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    };

    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/contact`, userMessage, options);
      if(response.status === 200) {
        setLoading(false);
        setSubmitSuccess(prev => !prev);

        setUserMessage({ email: "", message: "" });
        setValidEmail(prev => !prev);
      }

      else {
        if (response.data && response.data.message) {
          setLoading(false);
          setSubmitError(response.data.message);
        } else {
          setLoading(false);
          setSubmitError("Oops! Something went wrong. Please try again");
        }
      }
    } 
    catch (error) {
      setLoading(false);
    if (error.response && error.response.data && error.response.data.message) {
      setSubmitError(error.response.data.message);
    } else {
      setSubmitError("Oops! Something went wrong. Please try again.");
    }
    }
    finally {
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError(null);
      }, 5000);
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  return (
    <section id="contact" className="mx-auto max-w-7xl px-8 md:px-9 lg:px-16 py-20">
      <form
        onSubmit={handleFormSubmission}
        method="post"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 border-t-2 max-w-[100%] md:max-w-[85%] lg:max-w-[70%] mx-auto p-8"
      >
        <fieldset className="">
          <legend className="text-3xl font-[700] mb-8 text-headingColor">Get in touch</legend>
          <div className="relative mb-7 w-full">
          <input 
            onChange={handleInputChange}
            name="email"
            value={userMessage.email}
            id="email"
            className={`w-full  h-8 px-4 py-5 align-middle shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
            ${
              validEmail ? "border-green-500" : userMessage.email.length > 6 && "border-red-500"
            }`}
            type="email"
            placeholder="Your email"
            required
            autoComplete="off"
          />
          {!validEmail && userMessage.email.length > 6 && <div className="absolute -bottom-10 text-red-500 text-sm mb-4">Please enter a valid email address.</div>}
          </div>
          <label htmlFor="email" className="sr-only">
            Email:{" "}
          </label>
          <textarea
            onChange={handleInputChange}
            name="message"
            value={userMessage.message}
            className="w-full mb-2 h-32 lg:h-48 p-4 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your message"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            name="formSubmitBtn"
            className={`flex items-center justify-center text-[13px] font-[500] rounded-full py-2 px-5 border-[1.78px] border-transparent bg-primaryColor text-white ${!loading && "hover:bg-smallTextColor"} duration-300 ease-in`}
            disabled={loading}
          >
            {!loading ? "Submit" : <BeatLoader color="#a095d4" speedMultiplier={0.5}/>}
          </button>
        </fieldset>
      </form>
      {submitSuccess && <div className="text-green-500 mx-auto text-center">Thanks for reaching out! Your message is received. Expect a response soon.</div>}
      {submitError && <div className="text-red-500 mx-auto text-center">{submitError}</div>}
    </section>
  );
}
