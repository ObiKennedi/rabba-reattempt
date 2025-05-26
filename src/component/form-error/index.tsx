import Image from "next/image";
import "./globals.scss"

interface FormErrorProps {
    message?: string;
}

export const FormError = ({message}:FormErrorProps) =>{
    if (!message) return null;
    return(
        <div className="form-error">
            <Image 
                src={"/icons/exclamation-triangle.png"}
                width={18}
                height={18}
                alt="error"
            />
            <div>{message}</div>
        </div>
    )
}