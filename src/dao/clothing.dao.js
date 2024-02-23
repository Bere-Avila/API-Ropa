import Producto from "../models/clothing.model.js";
const ProductoDAO={};
ProductoDAO.getAll=async()=>{
    const productos=await Producto.find({});
    return productos;
};
ProductoDAO.getOne=async(productCode)=>{
    const productos=await Producto.findOne({productCode:productCode});
    return productos;
};
ProductoDAO.insertOne=async(producto)=>{
    return await Producto.create(producto);
};
ProductoDAO.updateOne=async(productCode, producto)=>{
    return await Producto.findOneAndUpdate({productCode:productCode}, producto);
};

ProductoDAO.deleteOne=async(productCode)=>{
    return await Producto.findOneAndDelete({productCode:productCode});
};


export default ProductoDAO;