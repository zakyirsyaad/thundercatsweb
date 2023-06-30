import React from "react";
import './contact.css'

export default function Contact() {

    return (
        <div className="contact-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.96600976838!2d110.41632667514254!3d-7.686796692330365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ff7eaddd4c3%3A0xb5bb1df4a5d2e989!2sDingo%20Coffee%20-%20UII!5e0!3m2!1sen!2sid!4v1686840188925!5m2!1sen!2sid" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="touch-container">
                <div className="list-touch">
                    <p className="header-touch">Contact US</p>
                    <div className="contact-touch-warp">
                        <p className="contact-touch">Address:</p>
                        <p>Jl. Angsana Raya Sektor 1.1 Blok A 1/6 Rw.<br></br>Buntu, BSD CITY, Kota Tangerang Selatan, Banten 15318</p>
                    </div>
                    <div className="contact-touch-warp">
                        <p className="contact-touch">Email:</p>
                        <p>thunder@gmail.com</p>
                    </div>
                    <div className="contact-touch-warp">
                        <p className="contact-touch">Call Directly:</p>
                        <p>+62 123-456-789</p>
                    </div>
                    <div>
                        <p className="contact-touch">Work Hours:</p>
                        <p>Mon - Sun: 09:00 - 19:00</p>
                    </div>
                </div>
                <form className="form-input">
                    <input type="text" placeholder="Nama" />
                    <input type="email" placeholder="Email" />
                    <textarea name="" id="" placeholder="Pesan" />
                    <button type="submit">SEND MESSAGGES</button>
                </form>
            </div>
        </div>
    )
}