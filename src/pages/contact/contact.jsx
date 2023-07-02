import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

export default function Contact() {
    const [post, setPost] = useState({
        nama: '',
        email: '',
        pesan: ''
    });

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:3001/pesan', post)
            .then(response => {
                console.log(response);
                toast.success('Pesan Berhasil Dikirim', {
                    position: "top-right",
                    theme: "dark",
                });
            })
            .catch(error => {
                console.log(error);
                toast.error('Pesan Gagal Dikirim', {
                    position: "top-right",
                    theme: "dark",
                });
            });
    }

    return (
        <div className="contact-container">
            <ToastContainer />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.96600976838!2d110.41632667514254!3d-7.686796692330365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ff7eaddd4c3%3A0xb5bb1df4a5d2e989!2sDingo%20Coffee%20-%20UII!5e0!3m2!1sen!2sid!4v1686840188925!5m2!1sen!2sid" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                <form className="form-input" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nama" name="nama" onChange={handleInput} />
                    <input type="email" placeholder="Email" name="email" onChange={handleInput} />
                    <textarea placeholder="Pesan" name="pesan" onChange={handleInput} />
                    <button type="submit">SEND MESSAGES</button>
                </form>
            </div>
        </div>
    );
}
