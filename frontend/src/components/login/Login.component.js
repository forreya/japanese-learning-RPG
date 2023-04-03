import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { useState } from "react";
import { setCurrentUser } from "../../redux-store/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    event.preventDefault();

    let response = await fetch("http://localhost:8000/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status === 201) {
      let data = await response.json();
      dispatch(setCurrentScene("BEDROOM"));
      window.localStorage.setItem("token", data.token);
      console.log(data.userData);
      dispatch(setCurrentUser(data.userData.email));
    } else {
      console.log("response was: ", response);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            data-test="loginForm"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                  data-test="emailInput"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  data-test="passwordInput"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div>
            <button
              type="button"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => dispatch(setCurrentScene("START_MENU"))}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Back to Menu
            </button>
          </div>
        </div>
      </div> */}


      <div className="min-h-full min-w-full bg-pixelTrain bg-cover pixel-font">
        <form
          className=""
          onSubmit={handleSubmit}
          data-test="loginForm"
        >
          <div className="h-screen flex justify-center items-center">
            <div className="m-7 flex flex-col relative w-2/5">
              <div className="bg-japanese-brown mt-7 shadow-2xl sm:rounded-xl">
                <div className="p-5 text-white">
                  <h1 className="text-8xl md:text-5xl lg:text-7xl">.</h1>
                  <p className="text-base md:text-lg lg:text-8xl">.</p>
                  <p className="sm:mt-32 text-base md:text-lg lg:text-7xl">.</p>
                </div>
              </div>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="flex justify-center items-center flex-col shadow-xl bg-white p-6 sm:absolute sm:right-16 md:right-20 lg:right-32 sm:w-85 sm:rounded-xl">
                <h2 className="text-japanese-brown mt-5 mb-4 text-base md:text-lg lg:text-xl font-bold">Log In</h2>
                <div className="avatar rounded-full w-20 h-20 bg-white mb-6">
                  <img src="/img/sushi-icon.png"/>
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-b-2 border-grey-600 text-base md:text-s lg:text-s p-2 focus:outline-none focus:border-japanese-brown mb-4 sm:rounded-lg"
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                  data-test="emailInput"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full border-b-2 border-grey-600 text-base md:text-s lg:text-s p-2 focus:outline-none focus:border-japanese-brown mb-4 sm:rounded-lg"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  data-test="passwordInput"
                />
                <button 
                  className="pixel-font bg-japanese-brown hover:bg-darker-japanese-brown text-white w-full mt-6 mb-8 focus:outline-none text-base md:text-s lg:text-s p-3 sm:rounded-xl"
                  type="submit"
                >
                  LOGIN
                </button>
                <button
                  type="button"
                  className="text-japanese-brown mb-5 text-base md:text-s lg:text-s"
                  onClick={() => dispatch(setCurrentScene("START_MENU"))}
                  data-test="backToMenuButton"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
