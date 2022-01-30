import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer"],
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/man.png"} alt="adam pham" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Adam Pham</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt="down arrow" />
                </a>
            </div>
        </div>
    )
}