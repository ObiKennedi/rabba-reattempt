"use client"

import { signIn } from "next-auth/react"

import Image from "next/image"
import "./globals.scss"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const GoogleAuth = () => {

    const onClick = (provider: "google") =>{
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <button
            className="google-button"
            onClick={() => onClick("google")}
        >
            <Image
                src={'/icons/google.png'}
                width={24}
                height={24}
                alt="google"
            />
            <div>Continue with Google</div>
        </button>
    )
}