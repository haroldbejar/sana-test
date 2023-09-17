import { useState, useEffect, useCallback, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import MainContent from "../componets/MainContent";
import Navbar from "../componets/Navbar";
import SubNavbar from "../componets/SubNavbar";
import endPoints from "../endPoints/endPoints";
import axios from "axios";
import Pagination from "../componets/Pagination";

const Home = () => {
  const { setProducts, setCurrentPageContext } = useContext(ProductContext);
  const [contentProducts, setContentProducts] =  useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  /* Request that returns all products*/
  const getProducts = useCallback(async() => {
    await axios.get(`${endPoints.inventory.paginate}/${currentPage}/${pageSize}`)
      .then(response =>{
        setProducts(response.data.inventory);
        setContentProducts(response.data.inventory);
        setTotalPages(response.data.paginationData.totalPages);
        console.log(response)
      }).catch(error => {
        console.error(error);
      })
  },[currentPage, setProducts])

  useEffect(() => {
    getProducts();
  },[getProducts])

  const filterProduct = (itemSearch) => {
    var searchedResult = contentProducts.filter((element) => {
      if (element.name.toLowerCase().includes(itemSearch.toLowerCase())) {
        return element;
      }
    });
    setProducts(searchedResult);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setCurrentPageContext(newPage);
  }

    return (
        <>
          <Navbar callBackSearchItem={filterProduct} />
          <SubNavbar/>
          <MainContent  />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
    );
};
export default Home;