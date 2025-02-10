import './Header.css';
export const Header = () => {
    const userName = window.Telegram.WebApp.initDataUnsafe?.user?.username
    return <div className="product-header-container">
        <div className="product-header-welcome">
            Здравствуй, {userName || 'Sherri270'}!
        </div>
    </div>
}