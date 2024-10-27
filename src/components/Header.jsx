
const Header = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* nav bar */}
            <div className="md:flex md:justify-between items-center ">
            <div className="font-bold text-2xl">Chefs Table</div>
            <div>
                <ul  className="flex gap-4 font-bold" >
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Home</li>
                </ul>
                
            </div>
            <div className="items-center">
                    <button className="pl-5 pr-20 py-1 mr-2 rounded-2xl bg-gray-400"><i className="fa-solid fa-magnifying-glass-plus"></i> Search</button>
                    <i className="fa-regular fa-circle-user text-3xl"></i>
                </div>
            </div>

            {/* banner */}
            <div className="bg">
                <div className="bg-cover bg-no-repeat" style={{
                    backgroundImage:'url(https://i.ibb.co.com/jrNyY8b/banner.jpg)',
                }

                }
                ></div>
            </div>

            {/* our recipes */}
            <div className="text-center space-y-3 mt-5">
                <h2 className="font-bold text-4xl">Our Recipes</h2>
                <p className="text-xl">Our recipes are a perfect blend of flavor, simplicity, and nourishment, <br /> tailored to suit any craving or dietary preference!</p>
            </div>
        </div>
    );
};

export default Header;