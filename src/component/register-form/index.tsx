"use client"

import { CardWrapper } from "../Card-wrapper"
import { RegisterSchema } from "@/schemas"
import { registerAction } from "@/actions/register"
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error"

import { useState } from "react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import "./index.scss"

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            registerAction(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success)
                })
        })
    };

    return (
        <CardWrapper
            headerLabel="Register"
            formWriteUp="Create an account to access all the benefits with Rabba!"
            backLinkHref="/sign-in"
            backLinkLabel="Don’t have an account?"
            backLinkTitle="Log in"
            hasBackLink
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label htmlFor="name">Full name</label>
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="ex: John Middle Doe"
                            disabled={isPending}
                        />
                        {errors.email && <small>{errors.email.message}</small>}
                    </div>
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
                <FormError message={error} />
                <FormSuccess message={success} />
                <button type="submit" disabled={isPending}>
                    {isPending ? "creating account ..." : "Create account"}
                </button>
            </form>
        </CardWrapper>
    )
}