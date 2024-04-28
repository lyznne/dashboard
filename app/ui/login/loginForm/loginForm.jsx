"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  const submitAnonyData = async () => {
    const anonyCredentials = new FormData();
    anonyCredentials.append("username", "anonymous");
    anonyCredentials.append("password", "adminAnonymous");

    await formAction(anonyCredentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await formAction(e.target);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Login</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
      <span> or </span>
      <button type="button" onClick={submitAnonyData}>
        Continue as Anonymous
      </button>
      {state}
    </form>
  );
};

export default LoginForm;