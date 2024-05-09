import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <>
      <div className="cosmetics-header">
        <div className="navbar-collapse">
          {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
            <d3iv key={expand}>
              <Navbar expand={expand} className="bg-body-tertiary mb-3">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </Navbar>
            </d3iv>
          ))}
        </div>
        <p>BEAUTIFLIE</p>
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBagShopping} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </>
  );
}

export default App;
