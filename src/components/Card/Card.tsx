import './Card.css'
import ItemLogo from '../../assets/mock.png'
import { Button } from '../Button'
import { useState } from 'react'
import { PurchaseForm } from '../PurchaseForm'

// interface CardProps {
//     onClick: () => void;
// }

export const Card = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const onCancel = () => {
        setIsOpenDialog(false)
    }

    const onSubmit = () => {
        setIsOpenDialog(false)
    }

    return <>
        <div className="card-container">
            <div className="item-logo">
                <img width={150} height={150} src={ItemLogo} alt="Превью" />
            </div>
            <div className="item-description">
                <div className="item-title">HATNESS HELL</div>
                <div className="item-text">Материал: хлопок 95% лайкра 5%</div>
                <div className='item-price'>Цена: 5000₽</div>
                <div className="item-actions">
                    {/* <Select placeholder={'Размер'} className="item-actions-select" options={options} /> */}
                    <Button onClick={() => {
                        setIsOpenDialog(true)
                    }}>Купить</Button>
                </div>
            </div>
        </div>
        <PurchaseForm isOpen={isOpenDialog} onCancel={onCancel} onSubmit={onSubmit} />
    </>
}