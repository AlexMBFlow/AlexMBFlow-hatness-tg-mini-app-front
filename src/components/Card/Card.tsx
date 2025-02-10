import './Card.css'
import ItemLogo from '../../assets/mock.png'
import { Button } from '../Button/Button'

export const Card = () => {
    return <div className="card-container">
        <div className="item-logo">
            <img width={150} height={150} src={ItemLogo} alt="Превью" />
        </div>
        <div className="item-description">
            <div className="item-title">HATNESS HELL</div>
            <div className="item-text">Материал: хлопок 95% лайкра 5%</div>
            <div className='item-price'>Цена: 5000₽</div>
            <div className="item-actions">
                {/* <Select placeholder={'Размер'} className="item-actions-select" options={options} /> */}
                <Button>Купить</Button>
            </div>
        </div>
    </div>
}