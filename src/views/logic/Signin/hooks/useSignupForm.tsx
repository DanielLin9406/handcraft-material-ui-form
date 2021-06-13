import React, { useEffect, ReactElement } from "react";
// import { useForm } from "react-hook-form";

export const useSignupForm = ({ handleSignup }) => {
  // const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleSignup(data);
  };

  const handleCustomerNameChange = (e) => {
    setValue("userName", e.target.value);
  };

  const handlePWDChange = (e) => {
    setValue("userPWD", e.target.value);
  };
  const handleEmailChange = (e) => {
    setValue("email", e.target.value);
  };

  useEffect(() => {
    register("userName", {
      required: "First name is required.",
      pattern: {
        value: /\w+/,
        message: "This input pattern is wrong.",
      },
    });
    register("userPWD", {
      required: "This password is required.",
    });
    register("email", {
      required: "This Email is required.",
    });
  }, [register]);
  return {
    onSubmit,
    handleCustomerNameChange,
    // handleSubmit,
    handleEmailChange,
    // errors,
    handlePWDChange,
  };
};
