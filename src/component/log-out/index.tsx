"use client";

import { signOut } from "next-auth/react";
import "./index.scss"

const LogoutButton = () => {
  return (
    <button className="log-out" onClick={() => signOut()}>
      Log out
    </button>
  );
};

export default LogoutButton;
