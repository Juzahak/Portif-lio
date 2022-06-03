import Listaportifolio from '../listaPortifolio/Listaportifolio';
import './Portifolio.scss';
import { useState, useEffect } from 'react';
import {
    destaquesPortifolio, htmlPortifolio, reactPortifolio, reactnaPortifolio, CPortifolio
} from "../../data.js"

export default function Portifolio() {
    const [selected, setSelected] = useState("destaques")
    const [data, setData] = useState([])
    const list = [
        {
            id: "destaques",
            title: "Destaque",
        },
        {
            id: "htmlcss",
            title: "HTML/CSS/JS",
        },
        {
            id: "reactjs",
            title: "React",
        }, 
        {
            id: "reactnative",
            title: "WordPress",
        },
        {
            id: "C#",
            title: "C#",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "destaques":
                setData(destaquesPortifolio);
                break;
            case "htmlcss":
                setData(htmlPortifolio);
                break;
            case "reactjs":
                setData(reactPortifolio);
                break;
            case "reactnative":
                setData(reactnaPortifolio);
                break;
            case "C#":
                setData(CPortifolio);
                break;
            default:
                setData(destaquesPortifolio);
        }
    }, [selected])

    return (
        <div className="portifolio" id="portifolio">
            <h1>Portfólio</h1>
            <ul>
                {list.map((item) => (
                    <Listaportifolio title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container"  >
                {data.map((d)=>(
                <a href={d.caminho}>
                <div className="item" >
                    <img src={d.img}  alt="" />
                    <h3>{d.title}</h3>
                </div></a>
                ))}
            </div>
        </div>
    )
}
