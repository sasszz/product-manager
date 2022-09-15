import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null)
    const [price, setPrice] = useState(0);
    const [priceError, setPriceError] = useState(null)
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(() => {
                navigate('/products');
            })
            .catch((error) => {
                console.log(error)
                // const errorResponse = err.response.data.errors;
                // const errorArr = [];
                // for (const key of Object.keys(errorResponse)) {
                //     errorArr.push(errorResponse[key].message)
                // }
                // setErrors(errorArr);
                // console.log(errorArr)
            })
    }


    const validateTitle = () => {
        if (title.length < 3) {
            setTitleError('Title must be longer than 3 characters')
        } else {
            setTitleError(null)
        }
    }

    const validatePrice = () => {
        if (price.length < 3) {
            setPriceError('Price must be longer than 2 characters')
        } else {
            setPriceError(null)
        }
    }

    const validateDescription = () => {
        if (description.length < 5) {
            setDescriptionError('Description must be longer than 5 characters')
        } else {
            setDescriptionError(null)
        }
    }

    return (
        <div className="container">
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">Edit Product</h5>
                <div className="card-body p-4">
                    <form onSubmit={updateProduct}>
                    {errors &&
                        errors.map((error, idx) => {
                            return <p key={idx}>{error}</p>;
                        })}
                        <div className='mb-4'>
                            <label htmlFor="title" className='form-label'>Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className='form-control'
                                value={title} 
                                onChange={(e) => { setTitle(e.target.value) }}
                                onBlur={validateTitle}
                            />
                            {
                                titleError &&
                                <span className="form-text text-danger">{ titleError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="price" className='form-label'>Price:</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className='form-control'
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                                onBlur={validatePrice}
                            />
                            {
                                priceError &&
                                <span className="form-text text-danger">{ priceError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="description" className='form-label'>Description:</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className='form-control'
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                onBlur={validateDescription}
                            />
                            {
                                descriptionError &&
                                <span className="form-text text-danger">{ descriptionError }</span>
                            }
                        </div>
                        <button type="submit" className="col-1 btn btn-warning btn-sm me-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct