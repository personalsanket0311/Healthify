"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3002/contacts", data);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <p className="text-danger">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
