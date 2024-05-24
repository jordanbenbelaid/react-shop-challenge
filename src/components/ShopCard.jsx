import { useState } from 'react';
import '../CSS/ShopCard.css'

const ShopCard = ({ name, price, imageUrl }) => {

  let [isButtonPressed, setButtonName] = useState("Add to cart")

  function newButtonName(){
    setButtonName("In Cart")
  }

  function oldButtonName(){
    setButtonName("Add to cart")
  }

  function change() {
    if (isButtonPressed === "Add to cart") isButtonPressed = newButtonName();
    else isButtonPressed = oldButtonName();
}

  return (
    <div className="wrapper">
      <img src={imageUrl} width={200} height={250} alt={name} title={name} />
      <h3 className="name">{name}</h3>
      <p className="price">£{price.toFixed(2)}</p>
      <button 
      onClick={change}
      className="add-cart-button">
        {isButtonPressed}
      </button>
      
    </div>
  )


// const [buttonClicked, setButton] = useState('Add to cart');
 
//     const handleClick = () => {
//         setButton(buttonClicked === 'Add to cart' ? 'In cart' : 'Add to cart');
//     };
 
//     return (
//         <button onClick={handleClick}>
//             {buttonClicked}
//         </button>
//     );
}

export default ShopCard;