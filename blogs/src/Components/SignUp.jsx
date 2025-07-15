import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "./Button.jsx";
import Input from "../Input.jsx";
import authService from "../Appwrite/Auth.js";
import { login as authlogin } from "../store/Authslice.js";

export default function SignUP() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    try {
      const newUser = await authService.createaccount(data);
      if (newUser) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authlogin(userData));
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
            Sign Up to Account
          </h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(create)}>
          <Input
            label="Name"
            placeholder="Enter your name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />

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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
