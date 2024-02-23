import { BounceLoader, PacmanLoader } from 'react-spinners';
import { useEffect, useState } from "react";
// import { useDispatch } from 'react-redux';
// import { clearCart } from '../redux/slices/CartSlice';


const Success = () => {
    const [loading, setLoading] = useState(true);
    // const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            // dispatch(clearCart())
        }, 3000)
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {loading ? (
                <div className='flex gap-2'>
                    <BounceLoader color="#19bf1c" />
                    <PacmanLoader color="#19bf1c" />
                </div>
            ) : (
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-center">
                        Order Successful!
                    </h2>
                    <p>Your order has been sucessfully placed</p>
                </div>
            )}
        </div>
    );
};

export default Success;