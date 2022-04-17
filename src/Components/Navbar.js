import React from "react";
 function Navbar() {
  return (
      <>
      
    <nav style={{height:"100px"}} className="navbar navbar-expand-lg navbar-light bg-light navbarMain">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="NavtopiaImg"   src="agrohil.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav navbar-nav navbar-left">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <i style={{color:"rgb(234 180 101"}} className="fa-regular fa-heart"></i>             Favoriler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <i style={{color:"rgb(234 180 101"}} className="fa-regular fa-user"></i>     Hesap
              
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <i style={{color:"rgb(234 180 101"}} className="fa-solid fa-cart-plus p-1"></i>Sepet
             
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right d-block d-lg-none d-xl-none">
          <li className="nav-item dropdown itemRight1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  {" "}
                  <img className="imgFlag" src="./united-kingdom.png" />
                  EN
                </span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <span>
                      {" "}
                      <img className="imgFlag" src="./turkey.png" />
                      TUR
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span>
                      {" "}
                      <img className="imgFlag" src="./germany.png" />
                      GER
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown itemRight2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  {" "}
                  <img className="imgFlag" src="./dollar.png" />
                  USD
                </span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <span>
                      {" "}
                      <img className="imgFlag" src="./lira.png" />
                      TL
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span>
                      {" "}
                      <img className="imgFlag" src="./euro.png" />
                      EURO
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
