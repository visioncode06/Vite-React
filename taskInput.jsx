import { useState } from "react";

export default function TaskInput({ handleSubmit, handleChange, newTask }) {
  return (
    <>
      <input
        type="text"
        value={newTask}
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Select Your Fit Coach
        </option>
        <option>Coach Al</option>
        <option>Coach Sarah </option>




      </select>
    </>
    
  );
}

