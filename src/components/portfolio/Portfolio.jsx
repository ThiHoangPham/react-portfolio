import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    javascriptPortfolio,
    nodejsPortfolio,
    reactPortfolio,
    scssPortfolio
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "javascript",
            title: "Javascript App",
        },
        {
            id: "nodejs",
            title: "Node.js App",
        },
        {
            id: "react",
            title: "React App",
        },
        {
            id: "scss",
            title: "SCSS App",
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
            case "nodejs":
                setData(nodejsPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "scss":
                setData(scssPortfolio);
                break;
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} />
                        <p>{d.desc}</p>
                        <button><a href={d.src} target="_blank">Learn more...</a></button>
                    </div>
                ))}
            </div>
        </div>
    )
}
