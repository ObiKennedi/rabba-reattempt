"use client"

import { useEffect } from "react";
import Image from "next/image";
import "./globals.scss"

const Home = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
          window.location.href = "/home"; 
        }, 10000); 
    
        return () => clearTimeout(timer); 
      }, []);

    return (
        <main className="loading-page">
            <div>
                <Image
                    src={'/icons/logo.png'}
                    alt="logo"
                    width={70}
                    height={70}
                />
                <div>Rabba</div>
            </div>
            <div>
                <Image
                    src={'/icons/logo-background.png'}
                    width={300}
                    height={300}
                    alt="loading icons"
                />
                <Image
                    src={'/icons/logo-background.png'}
                    width={300}
                    height={300}
                    alt="loading icons"
                />
                <Image
                    src={'/icons/logo-background.png'}
                    width={300}
                    height={300}
                    alt="loading icons"
                />
            </div>
        </main>
    )
}

export default Home