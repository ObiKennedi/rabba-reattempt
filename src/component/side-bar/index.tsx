"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.scss"
import LogoutButton from "../log-out";

const SideBar = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <nav className="nav-bar">
            <ul>
                <li className={isActive("/home") ? "active" : ""}>
                    <Link href="/home">
                        <Image
                            src={
                                isActive("/home") ? 
                                "/icons/home-white.png" : 
                                "/icons/home.png"
                            }
                            width={30}
                            height={30}
                            alt="home"
                        />
                        <div>Home</div>
                    </Link>
                </li>

                <li className={isActive("/history") ? "active" : ""}>
                    <Link href="/history">
                        <Image
                            src={
                                !isActive("/history") ? 
                                "/icons/history.png" : 
                                "/icons/history-white.png"
                            }
                            width={30}
                            height={30}
                            alt="history"
                        />
                        <div>Transaction history</div>
                    </Link>
                </li>

                <li className={isActive("/messages") ? "active" : ""}>
                    <Link href="/messages">
                        <Image
                            src={
                                !isActive("/messages") ? 
                                "/icons/notification.png" : 
                                "/icons/notification-white.png"
                            }
                            width={30}
                            height={30}
                            alt="notification"
                        />
                        <div>Notification</div>
                    </Link>
                </li>

                <li className={isActive("/profile") ? "active" : ""}>
                    <Link href="/profile">
                        <Image 
                            src={
                                !isActive("/profile") ? 
                                "/icons/profile (2).png" :
                                "/icons/profile.png"
                            } 
                            width={30} 
                            height={30} 
                            alt="profile" 
                        />
                        <div>Profile</div>
                    </Link>
                </li>
            </ul>

            <LogoutButton/>
        </nav>
    );
};

export default SideBar;
