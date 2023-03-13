import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about-me">Über Mich</NavLink>

      <NavLink to="/projects">Projekte</NavLink>

      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
  );
};

export default Navigation;
