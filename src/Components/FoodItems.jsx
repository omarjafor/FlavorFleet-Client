import FoodData from "../assets/FoodData";
import FoodCard from "./FoodCard";

const FoodItems = () => {
    return (
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
            {
                FoodData.map(food => <FoodCard 
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                     />)
            }
        </div>
    );
};

export default FoodItems;