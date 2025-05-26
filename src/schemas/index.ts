import * as z from "zod"

export const LoginSchem = z.object({
    email: z.string().email({
        message: "Please insert a valid email"
    }).min(1, {
        message: "Email must not be empty"
    }),
    password: z.string().min(1, {
        message: "Password can not be empty"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please insert a valid email"
    }).min(1, {
        message: "Email must not be empty"
    }),
    password: z
        .string()
        .min(6, {
            message: "Password must have at least 6 characters"
        })
        .max(25, {
            message: "Password cannot exceed 25 characters"
        })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase letter"
        })
        .regex(/[a-z]/, {
            message: "Password must contain at least one lowercase letter"
        })
        .regex(/[0-9]/, {
            message: "Password must contain at least one number"
        })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain at least one special character"
        }),
    name: z.string().min(1, {
        message: "Name can not be empty"
    })
})