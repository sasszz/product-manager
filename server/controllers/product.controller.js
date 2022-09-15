const Product = require('../models/product.model');

const getAllProducts = (_, res) => {
    Product.find()
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json(err));
};

const getOneProduct = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

const insertProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json(err));
};

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json(err));
};

const deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllProducts,
    getOneProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
};