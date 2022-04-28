
import "./Navbar.css";
import {Link} from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="nav">
        
     <div><Link to={"/"}>Home</Link></div>
      <div><Link to={"/form"}>More Details</Link></div>
    </nav>
  );
};
