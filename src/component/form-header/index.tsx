import "./globals.scss"

interface HeaderProps {
    label: string
}

export const FormHeader = ({label}:HeaderProps) =>{
    return(
        <h2 className="form-header">{label}</h2>
    )
}