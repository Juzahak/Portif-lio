import './cabecalho.scss'
import {Person,Mail} from "@material-ui/icons"
import "../../global.scss";

export default function Cabecalho({menuOpen, setMenuOpen}) {
    return (
        <div className={"cabecalho " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Juzahak.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+55 11 96829-5449 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>Edevaldo.jr.barboza@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/edevaldo-barboza-0999a1229/" className="linked">
                        <img  src = {require("../../assets/in.png")} alt=""></img>
                    </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://github.com/Juzahak" className="linked">
                        <img  src = {require("../../assets/GitHub-Mark.png")} alt=""></img>
                    </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://www.facebook.com/juniior.silva.39" className="linked">
                        <img  src = {require("../../assets/faceface.png")} alt=""></img>
                    </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://wa.me/+5514996528505" target="__blank" className="linked">
                        <img  src = {require("../../assets/whatslogo1.png")} alt=""></img>
                    </a>
                    </div>
                </div>
                <div className="right" onClick={()=>setMenuOpen(!menuOpen)}>
                    <div className="hamburguer">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
 