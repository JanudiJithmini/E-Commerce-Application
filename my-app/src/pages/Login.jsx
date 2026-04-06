import React, { use } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";


const Login = () => {
  const [currentState, setCurrentState] = React.useState("Sign In");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
   const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
    
  }, [token]);
  
  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      onSubmit={onSubmitHandler}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-700"></hr>
      </div>
      {currentState === "Sign In" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full border border-gray-700 p-2 rounded-md"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
        className="w-full border border-gray-700 p-2 rounded-md"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        className="w-full border border-gray-700 p-2 rounded-md"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-pink-500">Forgot Password?</p>
        {currentState === "Sign In" ? (
          <p
            className="cursor-pointer text-pink-500"
            onClick={() => setCurrentState("Sign Up")}
          >
            Don't have an account?
          </p>
        ) : (
          <p
            className="cursor-pointer text-pink-500"
            onClick={() => setCurrentState("Sign In")}
          >
            Already have an account?
          </p>
        )}
      </div>
      <button className="bg-pink-500 text-gray-100 py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300 w-full mt-4">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
