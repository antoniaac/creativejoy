import categorySlice from "../store/slices/categorySlice";
import "./catNav.css";
import { useSelector } from "react-redux";

const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);

  return (
    <div className="cat-nav-container">
      <ul className="list">
        {categories.map((categ) => {
          return (
            <li className="items">
              <a href="#"> {categ} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CatNav;
