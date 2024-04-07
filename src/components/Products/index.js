import productsSlice from "../store/slices/productsSlice";
import "./products.css";
import { useSelector } from "react-redux";

const Products = () => {
  const productData = useSelector(productsSlice.getInitialState);
  return (
    <div className="products-container">
      {productData.map((product) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                className="prodImg"
                src={require("../../assets/" + product.img)}
              ></img>
            </div>
            <div className="product-description">
              <h5>
                <a href="#">{product.pName}</a>
              </h5>
              <p className="product-price">{product.price} lei</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
