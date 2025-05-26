import { GoogleAuth } from "@/component/google"
import Image from "next/image"
import Link from "next/link"
import "./globals.scss"
import { EmailAuth } from "@/component/email"

const SignUp = () => {
    return (
        <div className="sign-up">
            <div>
                <Image
                    src={"/icons/rabba-icon.png"}
                    width={200}
                    height={120}
                    alt="rabba"
                />
                <p>Recharge, Buy Data, Pay Bills, Gain access to earning opportunities through Rabba!</p>
            </div>
            <div>
                <p>Let's get started</p>
                <div>
                    <GoogleAuth />
                    <EmailAuth/>
                </div>
            </div>
            <footer>
                <span>Already have an account?</span>
                <Link href={"/sign-in"}>Sign in</Link>
            </footer>
        </div>
    )
}

export default SignUp