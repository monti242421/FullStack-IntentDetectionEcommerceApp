import { FiSearch } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
const Searchbar = () => {
  return (
    <>
      <div className="overallContainer">
        <h1>Smart Search</h1>
        <form class="row">
          <div class="col-1 searchbuttoncontainer">
            <button type="submit" class="btn btn-primary searchbutton ">
              <FiSearch color="black" />
            </button>
          </div>
          <div class="col-9 searchbarcontainer">
            <input
              type="password"
              class="form-control searchbarinput"
              id="inputPassword2"
              placeholder=" Type your query"
            />
          </div>
        </form>
        <div class="card  containercover" style={{ width: "96%" }}>
          <p class="card-text examplesquery">
            <RxCountdownTimer />{" "}
            <span style={{ color: "purple" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I want a gift for my dad's birthday
            </span>
          </p>
          <p class="card-text examplesquery">
            <RxCountdownTimer />{" "}
            <span style={{ color: "purple" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show me running shoes for flat feet
            </span>
          </p>
          <p class="card-text examplesquery">
            <RxCountdownTimer />
            <span style={{ color: "purple" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best wireless headphones under
              Rs2000
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Searchbar;
