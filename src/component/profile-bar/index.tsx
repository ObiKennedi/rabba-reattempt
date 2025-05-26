import Image from "next/image";
import "./globals.scss";

type ProfileProps = {
    name: string;
    email: string;
    profile: string;
    fullName: string;
};

const Profile = ({ name, email, profile, fullName }: ProfileProps) => {
    return (
        <div className="profile-bar">
            <div>
                <Image
                    src={"/icons/rabba-icon.png"}
                    width={100}
                    height={50}
                    alt="logo"
                />
                <div>
                    <div>Hi, {name}</div>
                </div>
            </div>
            <div>
                <Image
                    src={profile === "" ? "/icons/dummy-2.png" : profile}
                    width={300}
                    height={300}
                    alt="profile"
                />
                <div>
                    <div>{fullName}</div>
                    <div>{email}</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
