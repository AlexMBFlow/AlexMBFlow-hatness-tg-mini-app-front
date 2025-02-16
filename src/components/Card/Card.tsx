import './Card.css'
import { Button } from '../Button'
import { CardProps } from '../ProductList/ProductList'
import AwesomeSlider from 'react-awesome-slider'
export const Card = ({ title, material, price, onButtonBuyClick, logo, onLogoClick }: CardProps) => {
    return <>
        <div className="card-container">
            <AwesomeSlider animation='fallAnimation'>
                {logo.map((logo, i) => (
                    <div onClick={() => {
                        onLogoClick(logo)
                    }} className="item-logo" key={i}>
                        <img width={150} height={150} src={logo} alt="Превью" />
                    </div>
                ))}
            </AwesomeSlider>
            <div className="item-description">
                <div className="item-title">{title}</div>
                <div className="item-text">Материал: {material}</div>
                <div className='item-price'>Цена: {price}₽</div>
                <div className="item-actions">
                    <Button onClick={() => onButtonBuyClick({
                        title
                    })}>Купить</Button>
                </div>
            </div>
        </div>
        {/* <LogoPreview setPreviewLogoPath={setPreviewLogoPath} logoPath={selectedLogo} isOpen={Boolean(selectedLogo)} /> */}
    </>
}