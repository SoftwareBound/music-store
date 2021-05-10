import "./style.css";
import { headlines } from "./common/constants/titles";
import { AddButton, SearchProducts, FilterDropdown } from "./toolbar/";
import { ProductItemContainer } from "./products";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className=" container-fluid">
      <Provider store={store}>
        <div className="row main-title-container">
          <span>{headlines.MAIN_TITLE}</span>
          <div className="row container toolbar-container">
            <div className="col-1">
              <AddButton />
            </div>
            <div className="col-3 ">
              <SearchProducts />
            </div>
            <div className="col-3">
              <FilterDropdown />
            </div>
          </div>
          <div className="row content-container">
            <div className="col-6 products-container ">
              <ProductItemContainer />
            </div>
            <div className="col-5 products-details"></div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
