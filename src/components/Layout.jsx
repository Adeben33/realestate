import { Outlet, Link } from "react-router-dom";
import logo from './../assets/Symbol.svg';
import "./Layout.css";
import Nav from "./nav";
import Footer from "./Footer";
import Explore from "./Explore";

function Layout({children}) {

    return (
      <div className="layout">
        <Nav />
        {children}
        <Explore />
        <Footer />
     </div>
    )
}

export default Layout;