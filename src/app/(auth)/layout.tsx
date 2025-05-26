import Image from "next/image"
import "./auth.scss"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth">
            <section>
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
            </section>
            <section>
                {children}
            </section>
        </main>
    )
}

export default AuthLayout