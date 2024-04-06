import categorySlice from "../store/slices/categories";
import "./catNav.css";
import { useSelector } from "react-redux";

const CatNav = () => {
  const categorii = useSelector(categorySlice.getInitialState);

  return (
    <div className="cat-nav-container">
      <ul className="list">
        {categorii.map((categ) => {
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
