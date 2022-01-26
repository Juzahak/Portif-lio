import './testemunhos.scss'

export default function Testemunhos() {

    const data = [
        {
            id: 1,
            name: "MewTwo",
            img: require("../../assets/mewtwo.jpg"),
            icon: require("../../assets/youtube.png"),
            desc: "Lorem ipsum, dol aut vel quisquam rem esse, facilis tempore earum commodi.",
            title: "Pokemon pika",
        },
        {
            id: 2,
            name: "MewTwo",
            img: require("../../assets/mewtwo.jpg"),
            icon: require("../../assets/twitter.png"),
            desc: "Lorem ipsum, dol aut vel quisquam rem esse, facilis tempore earum commodi.",
            title: "Pokemon pika",
            featured: true,
        },
        {
            id: 3,
            name: "MewTwo",
            img: require("../../assets/mewtwo.jpg"),
            icon: require("../../assets/linkedin.png"),
            desc: "Lorem ipsum, dol aut vel quisquam rem esse, facilis tempore earum commodi.",
            title: "Pokemon pika",
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
