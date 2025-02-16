import './Header.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Header = () => {
    const userName = window.Telegram.WebApp.initDataUnsafe?.user?.username
    const greetings = `Здравствуй${userName ? `, ${userName}!` : 'те!'}`
    const [text, _] = useTypewriter({
        words: [greetings, 'Добро пожаловать в Hatness!',],
        loop: true,
        delaySpeed: 800,
        typeSpeed: 115
    })
    return <div className="product-header-container">
        <div className="product-header-welcome">
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </div>
    </div>
}