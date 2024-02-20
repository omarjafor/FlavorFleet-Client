import logo from './../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
            <div className='flex flex-col lg:flex-row space-x-3'>
                <img src={logo} alt="" className='h-20 w-20'/>
                <div className='text-left'>
                    <h3 className="text-xl font-bold text-gray-500">{new Date().toUTCString().slice(0, 16)}</h3>
                    <h1 className="text-2xl font-bold text-green-600">Flavor Fleet</h1>
                </div>
            </div>
            <div>
                <input type="search" name="search" id="" placeholder="Search here" autoComplete="off" onChange={(e) => console.log(e.target.value)} />
            </div>
        </nav>
    );
};

export default Navbar;