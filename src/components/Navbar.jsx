import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'

export default function Navbar() {
    return(
        <nav className='navbar'>
            <h1 className='header-nav'>Plants!!!</h1>
                <div className='nav-link'>
                    <Link to="/">Home</Link>
                    <Link to="/plant">Shop</Link>
                </div>
        </nav>
    )
}