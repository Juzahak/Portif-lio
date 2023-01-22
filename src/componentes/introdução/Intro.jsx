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
            strings: ["Next.JS", "Mongo DB", "MySQL", "ReactJS", "PHP", "HTML", "CSS", "JavaScript", "SASS"],
        });
    }, [])

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
                <a className="seta" href="#portifolio">
                    <img src={require("../../assets/down.png")} alt="" />
                </a>
                <div className="icones">
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/edevaldo-barboza-0999a1229/" className="linked">
                            <img src={require("../../assets/in.png")} alt=""></img>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/Juzahak" className="linked">
                            <img src={require("../../assets/GitHub-Mark.png")} alt=""></img>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://wa.me/+5514996528505" target="__blank" className="linked">
                            <img src={require("../../assets/whatslogo1.png")} alt=""></img>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.facebook.com/juniior.silva.39" className="linked">
                            <img src={require("../../assets/faceface.png")} alt=""></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
 