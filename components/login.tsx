"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form className="space-y-4">
      <div>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          defaultValue="junior@sample.org"
          isInvalid={true}
          errorMessage="Please enter a valid email"
          className="w-full"
        />
      </div>
      <div>
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeOpenIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
      </div>
      <Button
        // isLoading
        as={Link}
        href="/dashboard"
        color="secondary"
        className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition duration-200"
        spinner={
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
      >
        Log In
      </Button>
      <p className="text-center text-gray-600 mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-violet-600 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
