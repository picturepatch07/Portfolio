import { Reorder } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default Navbar;
