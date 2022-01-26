import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["HTML", "CSS", "JavaScript", "SASS", "ReactJS"],
        });
    },[])

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src={require("../../assets/juzahak.png")} alt="" />
                   
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Bem vindo! me chamo</h2>
                   <h1>Edevaldo Barboza</h1>
                   <h3>Programador <span ref={textRef}></span></h3>
               </div>
               <a href="#portifolio">
                   <img src={require("../../assets/down.png")} alt="" />
               </a>
           </div>
        </div>
    )
}
