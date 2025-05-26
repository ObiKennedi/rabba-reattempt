import Link from "next/link"
import { FormHeader } from "../form-header"
import { GoogleAuth } from "../google"
import "./globals.scss"

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    formWriteUp: string,
    showGoogle?: boolean,
    backLinkLabel: string
    backLinkHref: string,
    backLinkTitle: string,
    hasBackLink?: boolean,
}

export const CardWrapper = ({
    children,
    headerLabel,
    formWriteUp,
    showGoogle,
    backLinkLabel,
    backLinkHref,
    backLinkTitle,
    hasBackLink
}: CardWrapperProps) => {
    return (
        <div className="card-wrapper">
            <header>
                <FormHeader label={headerLabel} />
                <div>{formWriteUp}</div>
            </header>
            <div>
                {children}
            </div>
            {showGoogle && (
                <div>
                    <GoogleAuth />
                </div>
            )}
            {hasBackLink && (
                <footer>
                    <span>{backLinkLabel}</span>
                    <Link href={backLinkHref}>{backLinkTitle}</Link>
                </footer>
            )}
        </div>
    )
}