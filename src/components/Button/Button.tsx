import './Button.css'

type Button = {
    children: React.ReactNode;
}

export const Button = ({ children }: Button) => {
    return <div className="button-container">
        <div className="button-text">{children}</div>
    </div>
}