import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(() => {
                navigate('/products');
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null)
    const [price, setPrice] = useState(0);
    const [priceError, setPriceError] = useState(null)
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(null)

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
            {errors &&
            errors.map((error, idx) => {
                return <p key={idx}>{error}</p>;
            })}
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">New Product</h5>
                <div className="card-body p-4">
                    <form onSubmit={onSubmitHandler}>
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
                                <span className="form-text text-danger">{titleError}</span>
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
                                <span className="form-text text-danger">{priceError}</span>
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
                                <span className="form-text text-danger">{descriptionError}</span>
                            }
                        </div>
                        <button value="submit" className="col-1 btn btn-warning btn-sm me-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProduct