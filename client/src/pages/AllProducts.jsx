import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AllProducts = () => {
    const { sorted } = useOutletContext();
    const navigate = useNavigate();

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/products');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="card bg-primary mb-3 p-2 d-flex justify-content-center">
                <div className="row">
                    <h5 className="col-2 row p-0 m-0 d-flex justify-content-center align-items-center">Title</h5>
                    <h5 className="col-2 row p-0 m-0 d-flex justify-content-center align-items-center">Price</h5>
                    <h5 className="col row p-0 m-0 d-flex justify-content-center align-items-center">Description</h5>
                    <h5 className="col-1 row p-0 m-0 d-flex justify-content-center align-items-center"></h5>
                    <h5 className="col-1 row m-0 d-flex justify-content-center align-items-center"></h5>
                </div>
            </div>
            {sorted &&
                sorted.map((product) => {
                    return (
                        <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                            <div className="card-body">
                                <div className="row" key={sorted._id}>
                                    <p className="col-2 p-0 m-0 d-flex justify-content-center align-items-center">
                                        <Link className="text-black" to={`/products/${product._id}`}>{product.title}</Link>
                                    </p>
                                    <p className="col-2 p-0 m-0 d-flex justify-content-center align-items-center">{product.price}</p>
                                    <p className="col p-0 m-0 d-flex justify-content-center align-items-center">{product.description}</p>
                                    <button className="col-1 btn btn-warning btn-sm me-2">
                                        <Link to={`/products/${product._id}/edit`} className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </Link>
                                    </button>
                                    <button onClick={() => deleteProduct(product._id)} className="col-1 btn btn-danger btn-sm me-2">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts