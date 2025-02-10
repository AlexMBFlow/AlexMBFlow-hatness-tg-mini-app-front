import './Button.css'

type Button = {
    children: React.ReactNode;
    onClick: () => void
}

export const Button = ({ children, onClick }: Button) => {
    return <div onClick={onClick} className="button-container">
        <div className="button-text">{children}</div>
    </div>
}