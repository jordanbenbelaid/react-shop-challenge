import '../CSS/ShopPage.css'
import ShopCard from '../components/ShopCard'
import itemsData from '../data/itemsData.json'


const ShopPage = () => {
    return(
        <>
      <h1 className="header">Our plants</h1>
      <div className="items-grid">
        {
          itemsData.map((item) => (
            <ShopCard {...item} />
          ))
        }
      </div>
    </ >
    )
}

export default ShopPage;