import { useState } from 'react';
import './Trabalhos.scss'

export default function Trabalhos() {

    const [curentSlider, setCurrentSlider] = useState(0)

    const data = [
        {
            id: "1",
            icon: require("../../assets/writing.png"),
            title: "Cursos Realizados",
            desc: "Llit. Numqaxime amet nos vero adipisci laborum aliquam doloribus iure.",
            img: require("../../assets/cursos.png"),
            curso: "Alura"
            
        },
        {
            id: "2",
            icon: require("../../assets/twitter.png"),
            title: "Em andamento",
            desc: "Llit. Numqaxime amet nos vero adipisci laborum aliquam doloribus iure.",
            img: require("../../assets/udemyjs.png"),
            curso: "Udemy"
            
        },
        {
            id: "3",
            icon:  require("../../assets/youtube.png"),
            title: "Em andamento",
            desc: "Llit. Numqaxime amet nos vero adipisci laborum aliquam doloribus iure.",
            img:  require("../../assets/udemyreact.png"),
            curso: "Udemy"
            
        },
    ];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlider(curentSlider > 0 ? curentSlider - 1 : 2) 
       : setCurrentSlider(curentSlider<data.length - 1 ? curentSlider + 1 : 0)
    };

    return (
        <div className="trabalhos" id="trabalhos">
            <div className="slider" style={{transform:`translateX(-${curentSlider * 100}vw)`}}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            <span>{d.curso}</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                   
                </div>
                ))}
            </div>
            
            <img src={require("../../assets/arrow.png")} className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src={require("../../assets/arrow.png")} className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
