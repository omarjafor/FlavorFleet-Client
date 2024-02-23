import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ element }) => {
    const cart = useSelector(state => state.cart.cart);
    return cart?.length > 0 ? element : <Navigate to='/'/>;
};

export default PrivateRoute;