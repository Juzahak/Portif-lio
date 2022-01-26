import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portifolio">Portifólio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#trabalhos">Cursos</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testemunhos">Comentarios</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contato">Contato</a>
                </li>
                
            </ul>
        </div>
    )
}
