import { NavLink } from "react-router-dom";
import '../pages/App.css'
import './navbar.css'

export default function Navbar() {
    return (
        <header>
            <NavLink className="brand-name" to='/'>Thundercats</NavLink>

            <nav>
                <p><NavLink className='link' to='shop'>Shop</NavLink></p>
                <p><NavLink className='link'>About</NavLink></p>
                <p><NavLink className='link'>Contact</NavLink></p>
                <div className="nav-icon">
                    <p class="material-symbols-outlined">
                        shopping_cart
                    </p>
                    <p class="material-symbols-outlined search">
                        search
                    </p>
                </div>
            </nav>
        </header>
    )
}