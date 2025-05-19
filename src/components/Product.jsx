import { FaRegHeart } from "react-icons/fa";
const Product = () => {
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
    <div className="card col-3 productcontainer">
      <img src={Data.image} class="card-img-top" alt="..." />
      <div className="rating">
        {Data.rating.stars} ⭐ | {Data.rating.count}
      </div>
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
      <button class="btn btn-primary addToCard">Add to Cart</button>
      <button className="addToWishList">
        <FaRegHeart size={30} />
      </button>
    </div>
  );
};
export default Product;
