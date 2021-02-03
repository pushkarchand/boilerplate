import * as React from "react";
import { useForm } from "react-hook-form";
import './reactive.css';

export default function ReactiveForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} placeholder="First name" />

      <input name="lastName" ref={register} placeholder="Last name" />
      <input name="email" ref={register} placeholder="Email" />
      <input name="phone" ref={register} placeholder="phone" />

      <select name="category" ref={register}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <input type="submit" />
    </form>
  );
}
