import Product from "../components/product";
import { Link } from "react-router";

const HomeContent = () => {
  return (
    <>
      <div class=" text-center homecontent">
        {" "}
        <h1 class="display-5 fw-bold text-body-emphasis">
          Welcome To Our Store
        </h1>{" "}
        <div class="col-lg-6 mx-auto">
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button type="button" class="btn btn-danger btn-lg px-4 gap-3">
              <Link
                to="/Products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop Now
              </Link>
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="featureproductscontainer">
        <h3
          style={{
            marginLeft: "30px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Featured Products
        </h3>
        <div className="row">
          <Product></Product>;<Product></Product>;<Product></Product>;
          <Product></Product>;<Product></Product>;<Product></Product>;
        </div>
      </div>
    </>
  );
};
export default HomeContent;
