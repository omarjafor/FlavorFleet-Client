import { useDispatch } from 'react-redux';
import logo from './../assets/logo.png';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 space-y-3">
            <div className='flex flex-row space-x-3 space-y-2'>
                <img src={logo} alt="" className='h-20 w-20'/>
                <div className='text-left'>
                    <h3 className="text-xl font-bold text-gray-500">{new Date().toUTCString().slice(0, 16)}</h3>
                    <h1 className="text-2xl font-bold text-green-600">Flavor Fleet</h1>
                </div>
            </div>
            <div>
                <input type="search" name="search" id="" placeholder="Search here" autoComplete="off" onChange={(e) => dispatch(setSearch(e.target.value))} className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
            </div>
        </nav>
    );
};

export default Navbar;