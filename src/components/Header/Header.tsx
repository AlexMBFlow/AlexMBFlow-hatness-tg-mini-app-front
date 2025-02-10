import './Header.css';
export const Header = () => {
    const userName = window.Telegram.WebApp.initDataUnsafe?.user?.username
    return <div className="product-header-container">
        <div className="product-header-welcome">
            Здравствуй, <span style={{
                fontWeight: 'bold'
            }}>{userName || 'Sherri270'}</span>!
        </div>
    </div>
}