import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "./Button.jsx";
import Input from "../Input.jsx";
import authService from "../Appwrite/Auth.js";
import { login as authlogin } from "../store/Authslice.js";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    try {
      await authService.logout();
      const session = await authService.login(data);
      if (session) {
        const UserData = await authService.getCurrentUser();
        if (UserData) {
          dispatch(authlogin(UserData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
 

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow dark:border dark:border-gray-700 p-6">
        <div className="mb-6 text-center">
          <h1 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            Login to account
          </h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(login)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
