import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header className="header sticky-top bg-light" style={{ zIndex: "9999" }}>
                <div className="nav">
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
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-md-auto gap-2">
                                            <li className="nav-item rounded">
                                                <Link
                                                    className="nav-link active"
                                                    aria-current="page"
                                                    to="/about"
                                                >
                                                    <i className="bi bi-house-fill me-2" />
                                                    About
                                                </Link>
                                            </li>
                                            <li className="nav-item rounded">
                                                <Link className="nav-link" to="/services">
                                                    <i className="bi bi-people-fill me-2" />
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item rounded">
                                                <Link className="nav-link" to="/projects">
                                                    <i className="bi bi-people-fill me-2" />
                                                    Projects
                                                </Link>
                                            </li>
                                            <li className="nav-item rounded">
                                                <Link className="nav-link" to="/contact">
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

            <Outlet />
        </>
    )
}
