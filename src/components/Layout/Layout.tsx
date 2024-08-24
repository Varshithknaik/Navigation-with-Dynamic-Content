import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"

import "./Layout.css"
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout