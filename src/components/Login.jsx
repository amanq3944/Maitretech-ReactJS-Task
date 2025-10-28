import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => e.preventDefault();

  const submitHandler = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        setUsername("");
        setPassword("");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error — check backend");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <nav className="bg-blue-500 text-white w-full flex justify-start items-center gap-10 min-h-14 font-sans fixed top-0">
          <div className="flex justify-center items-center ml-5 gap-2">
            <img
              className="size-8 brightness-0 invert"
              src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg"
              alt="logo"
            />
            <h1 className="text-xl">Food's Restaurant</h1>
          </div>
          <div className="space-x-5">
            <button onClick={() => navigate("/register")} className="cursor-pointer text-xl">
              Sign
            </button>
            <button onClick={() => navigate("/login")} className="cursor-pointer text-xl">
              Login
            </button>
          </div>
        </nav>

        <div>
          <form
            onSubmit={handleSubmit}
            className="py-10 px-5 flex flex-col w-86 shadow-2xl border border-gray-300 space-y-3 rounded font-sans"
          >
            <h1 className="text-2xl text-gray-900 font-sans text-center font-semibold">
              Login
            </h1>

            <div className="flex flex-col space-y-1.5">
              <label>Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="outline-0 py-0.5 px-1 rounded border border-gray-300"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="outline-0 py-0.5 px-1 rounded border border-gray-300"
              />
            </div>

            <button
              type="button"
              onClick={submitHandler}
              className="text-white rounded bg-blue-500 min-h-8 outline-0 hover:bg-blue-600"
            >
              Login
            </button>

            <div className="flex justify-center items-center">
              <button
                className="underline text-blue-800 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                If not registered, please register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
