import './ProductList.css'
import { Card } from "../Card/Card"
import { useState } from 'react';
import { PurchaseForm } from '../PurchaseForm';
import ItemLogo from '../../assets/mock.png'
import { LogoPreview } from '../LogoPreview/LogoPreview';

export interface CardProps {
    title: string
    material: string
    price: number
    logo: [string, string]
    onButtonBuyClick: (item: { title: string }) => void
    onLogoClick: (logoPath?: string) => void
}

interface CardInfo {
    title: string
    material: string
    price: number
    logo: [string, string]
}

const cards: CardInfo[] = [{
    title: 'HATNESS HELL Long1',
    material: 'хлопок 95% лайкра 5%',
    price: 1000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long2',
    material: 'хлопок 95% лайкра 5%',
    price: 2000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long3',
    material: 'хлопок 95% лайкра 5%',
    price: 3000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long4',
    material: 'хлопок 95% лайкра 5%',
    price: 4000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long',
    material: 'хлопок 95% лайкра 5%',
    price: 5000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long',
    material: 'хлопок 95% лайкра 5%',
    price: 6000,
    logo: [ItemLogo, ItemLogo]
}, {
    title: 'HATNESS HELL Long',
    material: 'хлопок 95% лайкра 5%',
    price: 7000,
    logo: [ItemLogo, ItemLogo]
}]

export const ProductList = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [productName, setProductName] = useState<null | string>(null)

    const [selectedLogo, setSelectedLogo] = useState<string | undefined>();

    const onCancel = () => {
        setIsOpenDialog(false)
    }

    const onSubmit = () => {
        setIsOpenDialog(false)
    }

    const openPurchaseForm = ({ title }: { title: string }) => {
        setProductName(title)
        setIsOpenDialog(true)
    }

    const setPreviewLogoPath = (logoPath?: string) => {
        setSelectedLogo(logoPath)
    }

    return <>
        <div className="product-container">
            {cards.map((card, i) => <Card
                title={card.title}
                material={card.material}
                price={card.price}
                logo={card.logo}
                onButtonBuyClick={openPurchaseForm}
                onLogoClick={setPreviewLogoPath}
                key={i}
            />)}
        </div>
        <LogoPreview logoPath={selectedLogo} onCloseLogo={setPreviewLogoPath} />
        <PurchaseForm productName={productName} isOpen={isOpenDialog} onCancel={onCancel} onSubmit={onSubmit} />
    </>
}

// export const ProductList = () => {
//     return <div className="product-container">
//         <Card  />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//     </div>
// }