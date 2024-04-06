import "./sideNav.css";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Categorii</h3>
      </div>

      <div className="accordion ">
        <div className="accordion-item-individual-category">
          <div className="accordion-header">
            <button
              className="accordion-button"
              data-bs-target="#accordion-heading-one"
              data-bs-toggle="collapse"
            >
              <div className="category-title">
                <a href="#">Bridal</a>
              </div>
            </button>
          </div>
        </div>

        <div
          className="accordion-collapse collapse-show"
          id="accordion-heading-one"
        >
          <div className="accordion-body">
            <ul>
              <li className="sub-items">
                <a href="#">Cutii verighete</a>
              </li>
              <li className="sub-items">
                <a href="#">Umerase miri</a>
              </li>
              <li className="sub-items">
                <a href="#">Semne masa</a>
              </li>
              <li className="sub-items">
                <a href="#">Albume foto</a>
              </li>
              <li className="sub-items">
                <a href="#">Ochelari petrecere</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
