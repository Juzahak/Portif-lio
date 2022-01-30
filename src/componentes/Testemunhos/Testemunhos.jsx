import './testemunhos.scss'

export default function Testemunhos() {

    const data = [
        {
            id: 1,
            name: "Eduardo Cerqueira",
            img: require("../../assets/menduka.jpeg"),
            icon: require("../../assets/whatslogo.png"),
            desc: "O Junior é um cara extremamente esforçado, eu vi de perto sua evolução como programador, e simplesmente, foi maravilhosa. Não tenho dúvidas do seu comprometimento e também da sua vontade de ficar cada vez melhor.",
            title: "Dev. Aplicativos Móveis",
        },
        {
            id: 2,
            name: "Stefanie Moraes",
            img: require("../../assets/stefanie.jpeg"),
            icon: require("../../assets/whatslogo.png"),
            desc: "O Junior é um profissional determinado e dedicado. Acompanhei todo o seu progresso e garanto que ele está preparado para desenvolver seu conhecimento na área de programação.",
            title: "Correspondente Bancário",
            featured: true,
        },
        {
            id: 3,
            name: "Gabriel Miranda",
            img: require("../../assets/gabriel.jpeg"),
            icon: require("../../assets/whatslogo.png"),
            desc: "O junior é um cara amante da programação, possui vontade de aprender e facilidade de absorção absurda, prevejo um crescimento enorme e um futuro brilhante dele na área, e tenho certeza que ele não vai descansar até desempenhar o melhor!",
            title: "Analista de Sistemas Jr",
        },
    ];
    

    return (
        <div className='testemunhos' id="testemunhos">
         <h1>Comentários</h1>
         <div className="container">
             {data.map((d)=>(
             <div className={d.featured ? "card featured" : "card"}>
                 <div className="top">
                     <img src={require("../../assets/right-arrow.png")} className="left" alt="" />
                     <img src={d.img} className="user" alt="" />
                     <img src={d.icon} className="right" alt="" />
                 </div>
                 <div className="center">{d.desc}</div>
                 <div className="bottom">
                     <h3>{d.name}</h3>
                     <h4>{d.title}</h4>
                 </div>
             </div>
             ))}
         </div>
        </div>
    )
}
