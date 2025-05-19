import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Header></Header>
      <div className="bodygrid">
        <div>
          <Searchbar></Searchbar>
        </div>
        <div>
          <Outlet />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
