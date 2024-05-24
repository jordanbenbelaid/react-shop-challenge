import { useState } from 'react';
import '../CSS/ShopCard.css'

const ShopCard = ({ name, price, imageUrl }) => {

  const [isButtonPressed, setButtonName] = useState(true)

  function newButtonName(){
    setButtonName("In Cart")
  }

  function resetButtonName(){
    setButtonName("Add to cart")
  }

  return (
    <div className="wrapper">
      <img src={imageUrl} width={200} height={250} alt={name} title={name} />
      <h3 className="name">{name}</h3>
      <p className="price">£{price.toFixed(2)}</p>
      <button 
      className="add-cart-button"
      onClick={isButtonPressed ? newButtonName : resetButtonName}>
        {isButtonPressed}
      </button>
      
    </div>
  )
}

export default ShopCard;