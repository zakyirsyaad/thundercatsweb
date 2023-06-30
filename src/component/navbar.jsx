import { NavLink } from "react-router-dom";
import '../pages/App.css'
import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="nav-container">
                <NavLink className='link' to='product'>
                    <p>product</p>
                </NavLink>
                <NavLink className='link' to='about'
                ><p>About</p>
                </NavLink>
            </nav>
            <nav className="nav-container">
                <NavLink className="brand-name" to='/'>
                    <p>Thundercats</p>
                </NavLink>
            </nav>

            <nav className="nav-container">
                <NavLink className='link' to='contact'>
                    <p>Contact</p>
                </NavLink>
                <NavLink className='link' to='contact'>
                    <p className="material-symbols-outlined">
                        shopping_cart_checkout
                    </p>
                </NavLink>
                <div className='link'>
                    <p className="material-symbols-outlined">
                        search
                    </p>
                </div>
            </nav>
        </header>
    )
}