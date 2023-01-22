import Listaportifolio from '../listaPortifolio/Listaportifolio';
import './Portifolio.scss';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    destaquesPortifolio, propriosPortifolio, phpPortifolio, nextPortifolio
} from "../../data.js"
import ReactPaginate from 'react-paginate';
export default function Portifolio() {
    const [selected, setSelected] = useState("destaques")
    const [data, setData] = useState([])
    const list = [
        {
            id: "destaques",
            title: "Destaque",
        },
        {
            id: "proprios",
            title: "Pessoais",
        },
        {
            id: "phpmysql",
            title: "PHP/JS/MySQL",
        },
        {
            id: "next",
            title: "Next.JS",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "proprios":
                setData(propriosPortifolio);
                break;
            case "phpmysql":
                setData(phpPortifolio);
                break;
            case "next":
                setData(nextPortifolio);
                break;
            default:
                setData(destaquesPortifolio);
        }
    }, [selected])

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (

                        <a href={item.caminho} target="_blank">
                            <div className="item" >
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                            </div></a>
                    )).reverse()}

            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = data.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(data.length / itemsPerPage);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % data.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Próximo"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Anterior"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <div className="portifolio" id="portifolio">
            <h1>Portfólio</h1>
            <ul className='menuposition'>
                {list.map((item) => (
                    <Listaportifolio title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container"  >
            <PaginatedItems itemsPerPage={4} />
            </div>
            
        </div>
    )
}
