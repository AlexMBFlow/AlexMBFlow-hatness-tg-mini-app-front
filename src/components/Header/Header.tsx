import './Header.css';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Header = () => {
    const userName = window.Telegram.WebApp.initDataUnsafe?.user?.username
    const [text, _] = useTypewriter({
        words: [`Здравствуй, ${userName || 'Sherri270'}!`, 'Добро пожаловать в Hatness Shop!',],
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