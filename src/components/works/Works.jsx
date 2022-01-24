import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "abc",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://i.pinimg.com/originals/f6/28/b7/f628b79ea9ba959fcd5196a21df95497.jpg",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "abc",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/f6/28/b7/f628b79ea9ba959fcd5196a21df95497.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "abc",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/f6/28/b7/f628b79ea9ba959fcd5196a21df95497.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
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
                                        <img src={d.icon} />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Lean more...</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}
