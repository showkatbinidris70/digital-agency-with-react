import React from 'react'
import hero_img_01 from '../../assets/images/slider image 1.png'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div>
            <section className="hero-section">
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <div className="hero-slider-image">
                                <img
                                    src={hero_img_01}
                                    className="img-fluid hero-image w-100 h-100"
                                    alt="Here is an image"
                                />
                                <div className="hero-overlay" />
                            </div>
                            <div className="carousel-caption">
                                <h2 className="hero-slider-title">
                                    Grow Your Digital Marketing Revenue
                                </h2>
                                <p className="short-message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                    suscipit asperiores fugiat distinctio ex perspiciatis repellendus.
                                </p>
                                <div className="mt-5">
                                    <Link to="projects" className="cta-btn">
                                        Our Projects <i className="fa-solid fa-arrow-right ps-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <div className="hero-slider-image">
                                <img
                                    src={hero_img_01}
                                    className="img-fluid hero-image w-100 h-100"
                                    alt="Here is an image"
                                />
                                <div className="hero-overlay" />
                            </div>
                            <div className="carousel-caption">
                                <h2 className="hero-slider-title">We are the top agency in town</h2>
                                <p className="short-message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                    suscipit asperiores fugiat distinctio ex perspiciatis repellendus.
                                </p>
                                <div className="mt-5">
                                    <Link to="projects" className="cta-btn">
                                        Our Projects <i className="fa-solid fa-arrow-right ps-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-slider-image">
                                <img
                                    src={hero_img_01}
                                    className="img-fluid hero-image w-100 h-100"
                                    alt="Here is an image"
                                />
                                <div className="hero-overlay" />
                            </div>
                            <div className="carousel-caption">
                                <h2 className="hero-slider-title">
                                    Grow Your Digital Marketing Revenue
                                </h2>
                                <p className="short-message">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                    suscipit asperiores fugiat distinctio ex perspiciatis repellendus.
                                </p>
                                <div className="mt-5">
                                    <Link to="projects" className="cta-btn">
                                        Our Projects <i className="fa-solid fa-arrow-right ps-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <i className="fa-solid fa-circle-arrow-left fs-1" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <i className="fa-solid fa-circle-arrow-right fs-1" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

        </div>
    )
}
