import ProductDAO from "../dao/clothing.dao.js";

const productsController = {};

export const getAll = (req, res) => {
    ProductDAO.getAll()
        .then(products => {
            res.render('../src/views/index.ejs', { products });
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    const productCode = req.params.productCode;
    ProductDAO.getOne(productCode)
        .then(result => {
            if (result) {
                res.render("../src/views/edit.ejs", { product: result });
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    ProductDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const productCode = req.params.productCode;
    const updatedProduct = req.body;

    ProductDAO.updateOne(productCode, updatedProduct)
        .then(result => {
            if (result) {
                res.redirect(`/ropa/vista`);
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const productCode = req.params.productCode;

    ProductDAO.deleteOne(productCode)
        .then(result => {
            if (result) {
                res.redirect(`/ropa/vista`);
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const mostrarPaginaRopa = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/ropa.ejs', { products });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaPrincipal = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/index.ejs', { products });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaAgregar = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/ropaagregar.ejs', { products }); 
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};
