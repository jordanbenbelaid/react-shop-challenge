import { Link } from 'react-router-dom'
import pic from '../images/plantImage.jpg'
import '../CSS/HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className='text'>
                <h1>Bring your<br />home to life.</h1>
                <p>Elevate your living space with a touch of nature.</p>
                <p>We offer a range of easy-care houseplants.</p>
                <Link to="/plant"><button>Browse plants</button></Link>
            </div>
            <img src={pic} alt="House plants" height={500} width={390} />
        </div>
    )
}

export default HomePage;