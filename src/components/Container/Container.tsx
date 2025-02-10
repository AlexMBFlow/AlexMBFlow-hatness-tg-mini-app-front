import './Container.css'
import { FC } from "react";

export const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='app-container'>
        {children}
    </div>
}