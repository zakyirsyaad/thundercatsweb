import "./formstyle.css"
import { Link } from 'react-router-dom';


export default function Form() {
    return (
        <div className="modal-form">
            <p className="header-form">
                "Gabunglah dengan Thundercats sekarang dan nikmati pengalaman belanja
                yang luar biasa! Daftarlah sekarang untuk akses eksklusif ke produk-produk terbaru
                dan penawaran menarik!"
            </p>
            <form className="form-container">
                <input type="email" name="" id="" className="email-form-modal" placeholder="contohsaja@gmail.com" />
                <Link className="link-sign" to="/shop">
                    <button className="btn-form-modal">Sign up</button>
                </Link>
            </form>
        </div >
    )
}