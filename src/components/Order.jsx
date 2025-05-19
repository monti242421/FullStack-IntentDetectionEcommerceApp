const Order = () => {
  return (
    <>
      <ul class="list-group " style={{ width: "700px", margin: "20px" }}>
        <li
          class="list-group-item "
          aria-current="true"
          style={{ fontWeight: "bold" }}
        >
          Order ID: #123456 | Date: 12/05/2021 | Total Price: Rs 3000 | Status:
          Delivered
        </li>
        <li class="list-group-item">
          <div className="row">
            <div className="col-2">
              <img src="images/1.jpg" width="70" />
            </div>
            <div className="col-5">
              <p style={{ fontWeight: "bold" }}>Bluetooth HeadPhones</p>
              <p>Qty: 1</p>
            </div>
            <div className="col-2" style={{ fontWeight: "bold" }}>
              Rs 1750
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div className="row">
            <div className="col-2">
              <img src="images/1.jpg" width="70" />
            </div>
            <div className="col-5">
              <p style={{ fontWeight: "bold" }}>Bluetooth HeadPhones</p>
              <p>Qty: 1</p>
            </div>
            <div className="col-2" style={{ fontWeight: "bold" }}>
              Rs 1750
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Order;
