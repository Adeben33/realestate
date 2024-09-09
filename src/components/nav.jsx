
import { Outlet, Link } from "react-router-dom";
import logo from './../assets/Symbol.svg';
import "./nav.css";

function Nav() {

    return (
        <>
      <nav className="nav">
        <div className="nav-logo">
                    <img src={logo} alt="logo" className="nav-logo__img"/>
                    <span className="nav-logo__text">Estatein</span>
       </div>
        <ul className="nav-list">
        <li className="li"> <Link to="/" className="nav-list--item">Home</Link> </li>
        <li className="li"> <Link to="/aboutuspage" className="nav-list--item" >About Us</Link> </li>
        <li className="li"> <Link to="/propertiesPage" className="nav-list--item" > Properties</Link></li>
        <li className="li"> <Link to="/servicepage" className="nav-list--item" >Services </Link></li>
         </ul>
         <div className="nav-contact">
         <Link to="/contactpage" className="nav-contact--a">Contact Us</Link> 
       </div>       
        </nav>
      <Outlet />
    </>
    )
}

export default Nav;