import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className='header-nav'>
      <header>
        <nav>
          <Link to={"/"} className="logo">
            Navigation Content
          </Link>
          <NavItems isMobile={false} />
          <div className="menu-icon">
            <HiOutlineMenuAlt3
              size={25}
              onClick={() => setOpenSidebar(true)}
            />
          </div>
        </nav>
        {
          openSidebar && (
            <div 
              className="nav-items-mobile open"
              onBlur={handleClose}
              onClick={handleClose}
              onKeyDown={handleClose}
              tabIndex={0}
            >
              <Link to={"/"} className="logo">
                Navigation Content
              </Link>
              <NavItems isMobile={true} />
            </div>
          )
        }   
      </header>
    </div>
  );
}

export default NavBar