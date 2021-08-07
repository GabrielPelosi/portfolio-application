import { useEffect, useState } from "react";
import PortfolioList from "./portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
    springPortfolio,
    webPortfolio,
    javaPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("Spring-Boot");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "Spring-Boot",
            title: "Spring-Boot",
        },
        {
            id: "ReactJS",
            title: "ReactJS",
        },
        {
            id: "Java",
            title: "Java",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "Spring-Boot":
                setData(springPortfolio);
                break;
            case "ReactJS":
                setData(webPortfolio);
                break;
            case "Java":
                setData(javaPortfolio);
                break;
            default:
                setData(springPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <span>Sometimes it necessary wait long response time in reactJS apps</span>
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
                {data.map((d) => (
                    <>
                        <div className="item">
                            
                            <img
                                onClick={() =>d.deployed ? window.open(d.appUrl, '_blank') : window.open(d.url, '_blank')}
                                src={d.img}
                                alt=""
                            />
                            <h3 onClick={() =>d.deployed ? window.open(d.appUrl, '_blank') : window.open(d.url, '_blank')}>{d.title}</h3>
                        </div>
                        <div className="containerBtn">
                            <button onClick={() => window.open(d.url, '_blank')} class>Code</button>
                            {d.deployed ? <button onClick={() => window.open(d.appUrl, '_blank') }>App</button>: ""}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}