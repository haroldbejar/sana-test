import { useState, useEffect, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import endPoint from "../endPoints/endPoints";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";

function SideMenu() {
    const {currentPage, setTotalProducts, setProducts} = useContext(ProductContext);
    const [sidebar, setSidebar] = useState(false);
    const [listCategory, setListCategory] = useState([]);
    const showSidebar = () => setSidebar(!sidebar);
    const pageSize = 10;

    useEffect(() => {
        const categoryList = async () => {
            await axios.get(endPoint.categories.base)
            .then(response => {
                setListCategory(response.data)
            }).catch(error => {
                console.error(error);
            })
        }
        categoryList();
    },[]);

    const handleClickCategory = async (id) => {
        const url = `${endPoint.inventory.byCategoryId}/${id}/${currentPage}/${pageSize}`;
        await axios.get(url)
        .then(response => {
            setTotalProducts(response.data.inventory);
            setProducts(response.data.inventory);
        }).catch(error => {
            console.error(error);
        })
    }

    
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar-menu">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                        <Link to='#' className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                        </li>
                        {listCategory.map((item, index) => {
                            return (
                                <li key={index} className="nav-text">
                                    <Link to="#" onClick={() => handleClickCategory(item.id)}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideMenu;