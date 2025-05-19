import CartItem from "../components/CartItem";
const Cart = () => {
  let totalItem = 3;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;
  return (
    <>
      <div className="cart">
        <div className="cartItems">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className="cartSummary">
          <div className="bag-details-container">
            <div
              className="price-header"
              style={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              PRICE DETAILS ({totalItem} Items){" "}
            </div>
            <div className="price-item">
              <span className="price-item-tag" style={{ fontWeight: "bold" }}>
                Total MRP
              </span>
              <span
                className="price-item-value"
                style={{ float: "right", fontWeight: "bold" }}
              >
                ₹{totalMRP}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag" style={{ fontWeight: "bold" }}>
                Discount on MRP
              </span>
              <span
                className="price-item-value priceDetail-base-discount"
                style={{ float: "right", fontWeight: "bold", color: "blue" }}
              >
                -₹{totalDiscount}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag" style={{ fontWeight: "bold" }}>
                Convenience Fee
              </span>
              <span
                className="price-item-value"
                style={{ float: "right", fontWeight: "bold" }}
              >
                ₹99
              </span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag" style={{ fontWeight: "bold" }}>
                Total Amount
              </span>
              <span
                className="price-item-value"
                style={{ float: "right", fontWeight: "bold" }}
              >
                ₹{234}
              </span>
            </div>
          </div>
          <div class="d-grid gap-2" style={{ marginTop: "20px" }}>
            <button class="btn btn-primary" type="button">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
