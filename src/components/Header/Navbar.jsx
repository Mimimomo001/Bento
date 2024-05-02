import { PiMagnifyingGlassLight } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
const Navbar = () => {
    return (
        <div >
        <div className="navbar max-w-[1100px] mx-auto">
          <div className="md:navbar-start w-full">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" hover:bg-red-100 rounded-lg py-1 px-3 mr-2 lg:hidden"
              >
                <CiMenuKebab className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
              >
                <li className="text-sm  font-medium capitalize cursor-pointer">
                  Home
                </li>
                <li className="text-sm  font-medium capitalize cursor-pointer">
                  Recipes
                </li>
                <li className="text-sm  font-medium capitalize cursor-pointer">
                  About
                </li>
                <li className="text-sm  font-medium capitalize cursor-pointer">
                  Search
                </li>
              </ul>
            </div>
            <button className="lg:text-2xl outline-none font-bold text-xl" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/bento-logo.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '5px' }} />
                <span className="text-red-600">Mimo</span>'s Bento
            </button>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8">
              <li className="text-sm font-medium capitalize cursor-pointer text-neutral-800">
                Home
              </li>
              <li className="text-sm  font-medium capitalize cursor-pointer text-neutral-800">
                Recipes
              </li>
              <li className="text-sm  font-medium capitalize cursor-pointer text-neutral-800">
                About
              </li>
              <li className="text-sm  font-medium capitalize cursor-pointer text-neutral-800">
                Search
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-8">
              <div className="md:flex hidden items-center gap-4 bg-red-50 rounded-3xl px-2 py-2 hover:bg-red-200 border-[1px] border-red-300 hover:border-transparent">
                <PiMagnifyingGlassLight className="text-xl text-red-600 ml-1" />
                <input
                  className="bg-transparent outline-none text-black placeholder-neutral-600 placeholder:text-sm"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div>
                <FaRegCircleUser className="w-8 h-8 rounded-full p-[6px]   text-white font-light bg-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;