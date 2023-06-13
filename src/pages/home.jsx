import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Form from "../component/form";

export default function Home() {

    const [showDialog, setShowDialog] = useState(false);

    const handleButtonClick = () => {
        setShowDialog(!showDialog);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className="container">
            <header>
                <p className="brand-name">Thundercats</p>

                <nav>
                    <p><NavLink className='link'>Shop</NavLink></p>
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

            <section className="banner-content">
                <p className="header-banner">Discover your luxury outfit.</p>

                <button className="modal-btn" onClick={handleButtonClick}>
                    {showDialog ? 'Welcome User' : 'Get Started'}
                </button>

                {showDialog && (
                    <div className="dialog">
                        <button className="close-modal-btn" onClick={handleCloseDialog}>
                            <span class="material-symbols-outlined icon-close-btn">
                                close
                            </span>
                        </button>
                        {<Form />}
                    </div>
                )}
            </section>
        </div >

    )
}