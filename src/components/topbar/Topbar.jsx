import "./topbar.scss";
import { Person, GitHub, LinkedIn } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">adamPham.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>0447 308 708</span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <a href="https://github.com/ThiHoangPham" target="_blank"><span>thihoangpham</span></a>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/thaihoangpham/" target="_blank"><span>thaihoangpham</span></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
