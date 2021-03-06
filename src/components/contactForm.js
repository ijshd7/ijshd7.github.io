import React, { useState }  from "react"
import axios from "axios";
const ContactForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/4113f349-e99f-495a-b529-18c2cb40e11c",
        data: new FormData(form)
      })
        .then(() => {
          handleServerResponse(true, <p className="text-green-400">Thanks!</p>, form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
      <>
        <h1 className="text-center font-sans text-green-400 text-5xl font-thin mt-6 mb-6">Want to know more? Let&apos;s Chat!</h1>
        <div className="text-center m-auto flex justify-center align-middle w-3/5">
            <form
              className="w-full max-w-sm"
              onSubmit={handleOnSubmit}
            >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    htmlFor="inputEmail"
                    required="required"
                    className="block text-green-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  >
                    Email address
                  </label>
                </div>
                <div className="md:w-2/3">
                    <input
                      type="email"
                      name="email"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      aria-label="Enter email here"
                      placeholder="Enter email"
                    />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                      htmlFor="inputName"
                      className="block text-green-400 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    >
                      Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                      type="text"
                      name="name"
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700"
                      id="inputName"
                      placeholder="Enter your name"
                      aria-label="Enter your name here"
                      required="required"
                    />
                </div>
              </div>
              <div className="md:flex md:items-center mb-4">
                  <label
                    className="font-sans text-xl text-green-400 font-semibold md:w-2/3"
                    htmlFor="formControlSelect"
                  >
                    What should we talk about?
                  </label>
                  <select className="text-green-400 font-extrabold outline-none bg-transparent" id="formControlSelect" name="platform" required="required">
                    <option>Web Development</option>
                    <option>Suggestions</option>
                    <option>I like your site!</option>
                  </select>
              </div>
              <button type="submit" className="mt-4 mb-8 text-lg text-green-700 bg-transparent border border-green-700 hover:border-transparent hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-linear" disabled={serverState.submitting}>
                  Submit
              </button>
              {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                  </p>
              )}
            </form>
        </div>
      </>
    );
  };
  
  export default ContactForm;