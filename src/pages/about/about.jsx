import imgAbout from '../../assets/about-pict.png'
import './about.css'

export default function About() {
    return (
        <section className='about-container'>
            <div className='image-container'>
                <img className='image-about' src={imgAbout}></img>
            </div>
            <div className='about-text-container'>
                <p className='about-header'>ABOUT THUNDERCATS</p>
                <p>
                    Selamat datang di THUNDERCATS - sebuah merek baju
                    yang menawarkan gaya yang berani dan penuh semangat
                    untuk para pemberani. Di THUNDERCATS,
                    kami percaya bahwa pakaian adalah cara terbaik untuk
                    mengekspresikan kepribadian Anda yang kuat dan unik.
                    Kami mengambil inspirasi dari kekuatan dan menciptakan
                    pakaian yang akan mempertegas keberanian Anda.
                </p>
                <p>
                    Kami bangga menggunakan bahan berkualitas tinggi dan
                    teknologi terkini dalam pembuatan pakaian kami.
                    Setiap desain kami dibuat dengan detail yang teliti
                    dengan memastikan kualitas yang tahan lama.
                    Dengan kualitas yang terjaga, Anda dapat merasakan
                    kenyamanan dan keyakinan saat menggunakan pakaian kami,
                    bahkan di lingkungan yang paling keras sekalipun.
                </p>
                <p>
                    THUNDERCATS hadir untuk memenuhi kebutuhan fashion Anda
                    yang memerlukan pakaian yang dapat membantu Anda menghadapi
                    tantangan hidup. Kami menawarkan pakaian yang bergaya,
                    fungsional, dan dapat dipakai sepanjang hari.
                    Kami berharap dapat membawa semangat pemberani ke
                    dalam gaya hidup Anda melalui koleksi kami yang luar biasa.
                </p>
                <p>
                    Terima kasih telah memilih THUNDERCATS!
                    Kami berharap dapat menjadi bagian dari perjalanan fashion Anda.
                </p>
                <p className='tag-about'>"THUNDERCATS"</p>
            </div>
        </section >
    )
}