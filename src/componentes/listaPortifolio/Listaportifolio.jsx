import './listaportifolio.scss'

export default function Listaportifolio({title, active, setSelected, id}) {
    return (
        <li className={active ? "listaportifolio active" : "listaportifolio"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
