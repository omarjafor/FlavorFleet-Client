import CategoryMenu from "../Components/CategoryMenu";
import FoodItems from "../Components/FoodItems";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <>
            <Navbar />
            <CategoryMenu />
            <FoodItems />
        </>
    );
};

export default Home;