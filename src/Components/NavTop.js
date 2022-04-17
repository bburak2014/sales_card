import React from "react";
import "../NavTop.css";

function NavTop() {
  return (
    <>
      <div className="row d-none d-lg-block d-xl-block">
        <ul className="ulNavTop">
          <li className="liNavTop">
            <a className="NavToplia" href="#home">
              100{" "}
              <img
                style={{ height: "12px", bottom: "2px" }}
                className="imgFlag"
                src="./lira.png"
              />{" "}
              ve üzeri <span className="NavTopliaSpan">ücretsiz kargo</span>
            </a>
          </li>

          <ul className="nav navbar-nav navbar-right  ">
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
        </ul>
      </div>
    </>
  );
}

export default NavTop;
