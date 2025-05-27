import { auth } from "@/auth"
import LogoutButton from "@/component/log-out";
import { signOut } from "next-auth/react";

const Settings = async () =>{
    const session = await auth();

    return(
        <div>
            {JSON.stringify(session)}.
            <LogoutButton/>
        </div>
    )
}

export default Settings