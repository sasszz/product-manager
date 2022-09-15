import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { compareTitle } from '../sort-utils/Sort.js'


const Products = () => {
    const baseUrl = 'http://localhost:8000/api/products';
    const [products, setProducts] = useState([]);
    const [sorted, setSorted] = useState([])

    let sortedFunction = () => {
        setSorted (products.sort(compareTitle))
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setProducts(res.data)
                sortedFunction(products)
            })
            .catch(err => console.log(err));
    })

    return (
        <div className="mt-3">
            <Outlet context={{ sorted, setSorted }}/>
        </div>
    )
}

export default Products