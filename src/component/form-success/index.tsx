import Image from "next/image";
import "./globals.scss"

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({message}:FormSuccessProps) =>{
    if (!message) return null
    return(
        <div className="form-success">
            <Image
                src={"/icons/success-circle.png"}
                width={18}
                height={18}
                alt="success"
            />
            <div>{message}</div>
        </div>
    )
}