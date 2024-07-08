import searchImg from '../assets/search.png'
import helpImg from '../assets/help_outline.png'
import downImg from '../assets/keyboard_arrow_down.png'
import cartImg from '../assets/Frame 1000009182.png'
import logImg from '../assets/account_circle.png'
import { Link } from "react-router-dom"
import {useState} from "react"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isSearchOpen) {
       setIsSearchOpen(false);
    }
      
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) {
      setIsOpen(false);
    }
    
  };
  
  return (
    <header className="flex  py-4 px-[5%] bg-background z-30  flex-wrap fixed top-0 left-0 w-full border">
      <div className="hidden sm:flex justify-between   flex-wrap  w-full ">
        <nav className="relative">
          <input
            type="text"
            className="border border-btn text-sm placeholder:text-sm outline-none placeholder:text-italic text-typo bg-transparent h-[30px] flex items-center pl-[30px] pr-2  w-[250px]"
            placeholder="Search proucts"
          />
          <button className="absolute aspect-square  h-full left-0 top-1/2 translate-y-[-50%] flex items-center justify-center">
            <img
              src={searchImg}
              alt="search icon"
              className="h-[20px] aspect-square "
            />
          </button>
        </nav>
        <nav>
          <Link to="/" className="text-2xl font-black text-typo font-brand">
            FitGear Hub
          </Link>
        </nav>
        <nav className=" flex items-center  ">
          <ul className="text-sm flex items-center  justify-center gap-2">
            <li>
              <button className="flex items-center gap-1 justify-between ">
                <img
                  src={helpImg}
                  alt="question mark icon"
                  className="h-[20px] aspect-square"
                />
                Help
                <img
                  src={downImg}
                  alt="arrow down icon"
                  className="h-[20px] aspect-square"
                />
              </button>
            </li>
            <li>
              <Link to="/cart" className="flex gap-1 items-center ">
                <img
                  src={cartImg}
                  alt="cart icon"
                  className="h-[20px] aspect-square"
                />
                Cart
              </Link>
            </li>
            <li>
              <button className="flex items-center gap-1 justify-between ">
                <img
                  src={logImg}
                  alt="question mark icon"
                  className="h-[20px] aspect-square"
                />
                Log in
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex sm:hidden items-center justify-between gap-2 w-full  flex-wrap relative">
        <nav className="flex items-center pl-[30px] relative">
          <div
            className={`hamburger ${
              isOpen ? "open" : ""
            } absolute top-1/2 translate-y-[-50%] left-0 z-50`}
            onClick={toggleMenu}
          >
            <div className="line bg-typo"></div>
            <div className="line bg-typo"></div>
            <div className="line bg-typo"></div>
          </div>
          <Link to="/" className="text-xl font-black text-typo font-brand">
            FitGear Hub
          </Link>
        </nav>
        <nav className="flex gap-2 items-center ">
          <button
            className="h-[25px] aspect-square rounded flex items-center justify-center border border-btn"
            onClick={toggleSearch}
          >
            <img
              src={searchImg}
              alt="search icon"
              className="h-[20px] aspect-square "
            />
          </button>
          <Link
            to="/cart"
            className="h-[25px] aspect-square rounded flex items-center justify-center border border-btn"
          >
            {" "}
            <img
              src={cartImg}
              alt="cart icon"
              className="h-[20px] aspect-square"
            />
          </Link>
        </nav>
        <nav className={`menu ${isOpen ? "open" : ""} text-base text-btn bg-background`}>
          <ul className="w-full flex flex-col gap-2 items-center justify-center ">
            <li>
              <button className="flex items-center gap-1 justify-between ">
                <img
                  src={helpImg}
                  alt="question mark icon"
                  className="h-[20px] aspect-square"
                />
                Help
                <img
                  src={downImg}
                  alt="arrow down icon"
                  className="h-[20px] aspect-square"
                />
              </button>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1 justify-between  "
                onClick={toggleMenu}
              >
                <img
                  src={cartImg}
                  alt="cart icon"
                  className="h-[20px] aspect-square"
                />
                Cart
              </Link>
            </li>
            <li>
              <button className="flex items-center gap-1 justify-between ">
                <img
                  src={logImg}
                  alt="question mark icon"
                  className="h-[20px] aspect-square"
                />
                Log in
              </button>
            </li>
          </ul>
        </nav>
        <nav
          className={`absolute top-[130%] z-40 rounded shadow  transition-all duration-300 ease-in-out ${
            isSearchOpen ? "right-0" : "right-[2000px]"
          }  w-full max-w-[400px] bg-white`}
        >
          <span className="relative w-full ">
            <input
              type="text"
              className="border border-btn text-sm placeholder:text-sm outline-none placeholder:text-italic text-typo bg-transparent h-[40px] flex items-center pl-[30px] pr-2  w-full"
              placeholder="Search proucts"
            />
            <button className="absolute aspect-square  h-full left-0 top-1/2 translate-y-[-50%] flex items-center justify-center">
              <img
                src={searchImg}
                alt="search icon"
                className="h-[20px] aspect-square "
              />
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
