"use client"

import Image from "next/image"
import "./globals.scss"

export const GoogleAuth = () => {
    return (
        <button
            className="google-button"
            onClick={() => { }}
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