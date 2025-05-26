"use client"

import { CardWrapper } from "../Card-wrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { LoginSchem } from "@/schemas"
import Link from "next/link"
import "./globals.scss"
import { useState } from "react"
import { useTransition } from "react"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoginSchem>>({
        resolver: zodResolver(LoginSchem),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof LoginSchem>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success)
            })
        })
    };

    return (
        <CardWrapper
            headerLabel="Login"
            showGoogle
            formWriteUp="Create an account to access all the benefits with Rabba!"
            backLinkHref="/sign-up"
            backLinkLabel="Don’t have an account?"
            backLinkTitle="Register"
            hasBackLink
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="ex: johndoe@example.mail"
                            disabled={isPending}
                        />
                        {errors.email && <small>{errors.email.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register("password")}
                            placeholder="******"
                            disabled={isPending}
                        />
                        {errors.password && <small>{errors.password.message}</small>}
                    </div>
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Link href={"/forgot-password"}>Forgot Password?</Link>
                <button type="submit" disabled={isPending}>
                    {isPending ? "Logging in..." : "Login"}
                </button>
            </form>
            <hr />
        </CardWrapper>
    );
};
