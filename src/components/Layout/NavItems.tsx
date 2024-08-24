import { Link, useLocation } from "react-router-dom";

type Props = {
  isMobile : boolean
}

const navItems = [
  {
    name: "One",
    link: "/one",
  },
  {
    name: "Two",
    link: "/two",
  },
  {
    name: "Three",
    link: "/three"
  }
]
const NavItems = (props: Props) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className='nav-items-desktop'>
        {
          navItems.map((item, index) => 
            <Link 
              key={index} 
              to={item.link}
              className={`nav-link ${ (item.name === 'Home' && pathname === '/') || (item.name !== 'Home' && pathname.includes(item.link)) ? 'active' : '' }`}
            >
              {item.name}
            </Link>
          )
        }
      </div>
      {
        props.isMobile && (
          <div className='nav-items-mobile'>
            {
              navItems.map((item, index) => 
                <Link 
                  key={index} 
                  to={item.link}
                  className={`nav-link ${ (item.name === 'Home' && pathname === '/') || (item.name !== 'Home' && pathname.includes(item.link)) ? 'active' : '' }`}
                >
                  {item.name}
                </Link>
              )
            }
          </div>
        )
      }
    </>
  );
};

export default NavItems