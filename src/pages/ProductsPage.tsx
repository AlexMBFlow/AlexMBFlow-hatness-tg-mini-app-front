import { Header } from "../components/Header/Header"
import { InfoForUser } from "../components/InfoForUser/InfoForUser"
// import { Logo } from "../components/Logo/Logo"
import { ProductList } from "../components/ProductList/ProductList"

export const ProductsPage = () => {
    return <div>
        <Header />
        <InfoForUser />
        {/* <Logo /> */}
        <ProductList />
    </div>
}