import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [affix, setAffix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffix(true);
      } else {
        setAffix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);
  return (
    <>
      <header className="header sticky-top" style={{ zIndex: "9999" }}>
        <div className={`nav ${affix ? "affix" : ""}`}>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-0">
                  <a className="navbar-brand" href="/">
                    <h3 className="fs-3">Nano</h3>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    aria-expanded={!isNavCollapsed ? true : false}
                    onClick={handleNavCollapse}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className={`${
                      isNavCollapsed ? "collapse" : ""
                    } navbar-collapse`}
                    id="navbarNav"
                  >
                    <ul className="navbar-nav ms-md-auto gap-2">
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/about"
                          onClick={closeNav}
                        >
                          <i className="bi bi-house-fill me-2" />
                          About
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          to="/services"
                          onClick={closeNav}
                        >
                          <i className="bi bi-people-fill me-2" />
                          Services
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          to="/projects"
                          onClick={closeNav}
                        >
                          <i className="bi bi-people-fill me-2" />
                          Projects
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          to="/contact"
                          onClick={closeNav}
                        >
                          <i className="bi bi-people-fill me-2" />
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="c-socials">
        <ul className="c-socials__list">
          <li className="c-socials__list-item">
            <a href="https://www.facebook.com/" title="">
              <svg
                height={512}
                viewBox="0 0 24 24"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 24h9v-8.25H9V12h3V9c0-2.486 2.014-4.5 4.5-4.5h3v3.75H18c-.828 0-1.5-.078-1.5.75v3h3.75l-1.5 3.75H16.5V24H21c1.654 0 3-1.346 3-3V3c0-1.655-1.346-3-3-3H3C1.345 0 0 1.345 0 3v18c0 1.654 1.345 3 3 3z" />
              </svg>
            </a>
          </li>
          <li className="c-socials__list-item">
            <a href="https://x.com/" title="">
              <i className="fa-brands fa-x-twitter text-dark" />
            </a>
          </li>
          <li className="c-socials__list-item">
            <a href="https://www.instagram.com/" title="">
              <svg
                height="512pt"
                viewBox="0 0 512 512.00006"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875C.320312 300.71875.0546875 278.570312 0 256.046875c.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875C16.347656 80.652344 32.1875 55.078125 55.382812 36.164062 79.421875 16.5625 109.601562 5.136719 142.667969 3.125 178.730469.933594 215.820312-.0898438 256.039062.0078125 296.183594-.078125 333.253906.933594 369.316406 3.125c33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062C334.78125 510.976562 299.304688 512 261.039062 512zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zM254.988281 381c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}
