import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { cartSliceAction } from "../store/cartSlice";
import { wishlistSliceAction } from "../store/wislistSlice";

function useAppInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response1 = await axios.get("http://localhost:4000/cart", {
          headers: {
            Authorization: token,
          },
        });

        dispatch(cartSliceAction.setCartFromDb(response1.data.data));

        const response2 = await axios.get("http://localhost:4000/wishlist", {
          headers: {
            Authorization: token,
          },
        });

        dispatch(wishlistSliceAction.setWishlistFromDb(response2.data.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchInitialData();
  }, []);
}

export default useAppInit;
