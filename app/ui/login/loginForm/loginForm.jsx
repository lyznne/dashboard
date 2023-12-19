"use client";

import { authenticate } from "@/app/lib/actions"
import styles from "./loginForm.module.css"
import { useFormState } from "react-dom"

const LoginForm = () => {
    // const [err, setErr] = useState()

    // const handleLogin = async (formData) => {
    //     const data = await authenticate(formData)
    //     data.error && setErr(data.error)


    // }

    const [state, formAction] = useFormState(authenticate, undefined)


    return (
        <form action={formAction} className={styles.form} >
            <h1>Login</h1>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Login</button>

            {err && state}
        </form>
    )
}

export default LoginForm
