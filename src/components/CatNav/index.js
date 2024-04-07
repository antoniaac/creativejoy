import { useEffect } from "react";
import categorySlice from "../store/slices/categorySlice";
import "./catNav.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../store/slices/categorySlice/actions";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="cat-nav-container">
      <ul className="list">
        {categories.map((categ) => {
          if (categ.parent_category_id === null) {
            return (
              <li className="items">
                <a href="#"> {categ.category} </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default CatNav;
