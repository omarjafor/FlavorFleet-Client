import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCart = () => {
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
            <MdDelete
                
                className="absolute right-7 text-gray-600 cursor-pointer"
            />
            <img src='' alt="" className="w-[50px] h-[50px] " />
            <div className="leading-5">
                <h2 className="font-bold text-gray-800">Name</h2>
                <div className="flex justify-between">
                    <span className="text-green-500 font-bold">Price</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7">
                        <AiOutlineMinus
                            
                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                        />
                        <span>qty</span>
                        <AiOutlinePlus
                            
                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;