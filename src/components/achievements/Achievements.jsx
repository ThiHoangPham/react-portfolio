import { useState } from "react";
import "./achievements.scss"

export default function Achievements() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "/assets/bage.png",
            title: "UWA CODING BOOTCAMP",
            desc:
                "A new professional web development course that aims to meet the rising demand for job-ready tech talent is be launched by The University of Western Australia.",
            img:
                "/assets/achievements/uwa-bootcamp-certificate.png",
        },
        {
            id: "2",
            icon: "/assets/bage.png",
            title: "UDEMY MODERN JAVASCRIPT",
            desc:
                "The most complete JavaScript course on Udemy. It take you from the very fundamentals of JavaScript, all the way to building modern and complex applications.",
            img:
                "/assets/achievements/udemy-javascript-certificate.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="achievements" id="achievements">
            <h1>Achievements And Certifications</h1>
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={process.env.PUBLIC_URL + d.icon} alt="icon img" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={process.env.PUBLIC_URL + d.img} alt="certificate img" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={process.env.PUBLIC_URL +"/assets/arrow.png"}
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src={process.env.PUBLIC_URL +"/assets/arrow.png"}
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}
