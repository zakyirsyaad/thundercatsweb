import Form from "../component/form";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import React, { useState } from 'react';

export default function Home() {
    const images = [
        "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ];



    const [showBanner, setShowBanner] = useState(true);

    const handleButtonClick = () => {
        setShowBanner(false);
    };
    return (
        <div className="container-home">
            <Fade>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    </div>
                </div>
            </Fade>
            {showBanner && (
                <section className="banner-content">
                    <div className="dialog">
                        <button className="close-modal-btn" onClick={handleButtonClick}>
                            <span className="material-symbols-outlined icon-close-btn">
                                close
                            </span>
                        </button>
                        <Form />
                    </div>
                </section>
            )}
        </div >

    )
}