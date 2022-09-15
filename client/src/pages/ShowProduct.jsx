import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowProduct = () => {
    const { id } = useParams();
    const { baseUrl } = useOutletContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    });

    return (
        <div className="container">
            {product && (
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">{product.title}</h5>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-2">Price:</div>
                        <div className="col">{product.price}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Description:</div>
                        <div className="col">{product.description}</div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShowProduct