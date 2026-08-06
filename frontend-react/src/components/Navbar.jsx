import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-icon">
          <i className="fa-solid fa-comments"></i>
        </div>

        <div>

          <h2>Community Forum</h2>

          <p>Learn • Discuss • Grow</p>

        </div>

      </div>

      <nav>

        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/login" ? "active" : ""}
          to="/login"
        >
          Login
        </Link>

        <Link
          className={location.pathname === "/register" ? "active register-btn" : "register-btn"}
          to="/register"
        >
          Register
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;