import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="adam pham photo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Adam Pham</h1>
                    <h3>Web Developer<span></span></h3>
                </div>
                <a href="#potfolio">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}