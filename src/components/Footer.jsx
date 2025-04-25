import FooterMenu from "./FooterMenu"
import { menuItem } from "../data"

export default function Footer() {
    const menuElements = menuItem.map((entry) => {
        return (
            <FooterMenu key={entry.id} id={entry.id} title={entry.title} menu={entry.menu} />
        )
    })

    return (
        <footer>
            <div className="footer-container">
                <div className="top-footer">
                    <div className="left-top-footer">
                        <img src="/logo.png" alt="" />
                        <div className="contact">
                            <h6>Gali Potensi Anda Melalui Pembelajaran <br /> Video di hariesok.id!</h6>
                            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p>+62-877-7123-1234</p>
                        </div>
                    </div>
                    <div className="right-top-footer">
                        {menuElements}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="bottom-footer">
                    <p>@2023 Gerobak Sayur All Rights Reserved.</p>
                    <div className="social-media-list">
                        <img src="/sosmed-linkedin.png" alt="" />
                        <img src="/sosmed-fb.png" alt="" />
                        <img src="/sosmed-ig.png" alt="" />
                        <img src="/sosmed-twitter.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}