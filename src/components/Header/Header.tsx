export const Header = () => {
    const userName = window.Telegram.WebApp.initDataUnsafe?.user?.username
    return <div>
        Здравствуй! {userName}
    </div>
}