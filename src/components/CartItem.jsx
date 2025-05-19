import { MdDelete } from "react-icons/md";
const CartItem = () => {
  const Data = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };
  return (
    <div className="cartitem">
      <img src={Data.image} width="150px" height="200px" />
      <div className="cartitemdetails">
        <h5 class="card-title">{Data.company}</h5>
        <p class="card-text">{Data.item_name}</p>
        <div className="price">
          <span className="current-price" style={{ fontWeight: "bold" }}>
            Rs {Data.current_price}
          </span>
          <span
            className="original-price"
            style={{ textDecoration: "line-through", margin: "10px" }}
          >
            Rs {Data.original_price}
          </span>
          <span className="discount" style={{ color: "red" }}>
            ({Data.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days" style={{ fontWeight: "bold" }}>
            {Data.return_period} days
          </span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days" style={{ color: "blue" }}>
            {Data.delivery_date}
          </span>
        </div>
      </div>

      <div className="deleteCartItem">
        <MdDelete size="40" />
      </div>
    </div>
  );
};
export default CartItem;
