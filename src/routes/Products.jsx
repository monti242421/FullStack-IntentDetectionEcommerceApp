import Product from "../components/product";

const Products = () => {
  return (
    <div className="featureproductscontainer">
      <h3
        style={{ marginLeft: "30px", marginTop: "10px", marginBottom: "20px" }}
      >
        Handpicked for You
      </h3>
      <div className="row">
        <Product></Product>;<Product></Product>;<Product></Product>;
        <Product></Product>;<Product></Product>;<Product></Product>;
      </div>
    </div>
  );
};
export default Products;
