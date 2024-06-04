import React, { useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import News_letter_img_one from "../assets/images/pexels-goumbik-653429.jpg";
import News_letter_img_two from "../assets/images/undefined - Imgur.png";
import News_letter_img_three from "../assets/images/img-002.png";
import slider_image_one from "../assets/images/slider image 1.png";
import slider_image_two from "../assets/images/slider image 2.png";
import client_img from "../assets/images/h10-client1.png";
import { Link } from "react-router-dom";
// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";

const useAnimateOnVisible = (maxValue, duration = 5000) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const animate = (element) => {
      if (!element.classList.contains("ms-animated")) {
        const maxval = maxValue;
        const html = element.innerHTML;
        element.classList.add("ms-animated");
        let start = null;
        const initialCount = parseInt(element.innerHTML, 10) || 0;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const countNum = Math.min(
            initialCount + (maxval - initialCount) * (progress / duration),
            maxval
          );
          element.innerHTML = Math.floor(countNum) + html;
          if (progress < duration) {
            window.requestAnimationFrame(step);
          } else {
            element.innerHTML = maxval + html;
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    const inVisible = (element) => {
      const WindowTop = window.scrollY;
      const WindowBottom = WindowTop + window.innerHeight;
      const ElementTop = element.offsetTop;
      const ElementBottom = ElementTop + element.clientHeight;

      if (ElementBottom <= WindowBottom && ElementTop >= WindowTop) {
        animate(element);
      }
    };

    const handleScroll = () => {
      if (elementRef.current) {
        inVisible(elementRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxValue, duration]);

  return elementRef;
};

const AnimateOnScroll = ({ maxValue }) => {
  const elementRef = useAnimateOnVisible(maxValue);

  return (
    <h2 ref={elementRef} data-max={maxValue}>
      0
    </h2>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="our-features py-5">
        <div className="container">
          <h2 className="text-center fw-1 fs-1">
            <span className="border-bottom border-2 border-warning">
              Our Features
            </span>
          </h2>
          <div className="row">
            <div className="card_grid">
              <section className="card cyan">
                <h2 className="card_title">Supervisor</h2>
                <p className="card_content">
                  Monitors activity to identify project roadblocks
                </p>
                <img
                  className="card_img"
                  src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-supervisor.svg"
                  alt="Supervisor"
                />
              </section>
              <section className="card red">
                <h2 className="card_title">Team Builder</h2>
                <p className="card_content">
                  Scans our talent network to create the optimal team for your
                  project
                </p>
                <img
                  className="card_img"
                  src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg"
                  alt="page-home"
                />
              </section>
              <section className="card blue">
                <h2 className="card_title">Karma</h2>
                <p className="card-content">
                  Regularly evaluates our talent to ensure quality
                </p>
                <img
                  className="card_img"
                  src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-karma.svg"
                  alt="Karma"
                />
              </section>
              <section className="card orange">
                <h2 className="card_title">Calculator</h2>
                <p className="card_content">
                  Uses data from past projects to provide better delivery
                  estimates
                </p>
                <img
                  className="card_img"
                  src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-calculator.svg"
                  alt="Calculator"
                />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" style={{ padding: "5rem 0rem" }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="pb-4 top-title">
              <p className="fs-4 fw-normal text-warning text-center">
                Services
              </p>
              <h2 className="">We will provide awesome services</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <Link to="/blogs">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card w-100 h-100 p-4 border-0 services-section-card">
                  <div className="">
                    <img
                      src={slider_image_one}
                      className="img-fluid"
                      alt="Here is an image"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Web &amp; Mobile Development</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia beatae nemo unde distinctio nostrum earum dolore
                      cupiditate sed rerum nam voluptas, suscipit ratione soluta
                      explicabo, iure, ullam maiores numquam? Earum.
                    </p>
                    <a href="#">
                      <button className="animated-button">
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Read More</span>
                        <span className="circle" />
                        <svg
                          viewBox="0 0 24 24"
                          className="arr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="row d-none">
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 1.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 2.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xxl-4 py-3 py-xl-0">
              <div className="card w-100 h-100 p-4 border-0 services-section-card">
                <div className="">
                  <img
                    src="./assets/images/slider image 3.png"
                    className="img-fluid"
                    alt="Here is an image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Web &amp; Mobile Development</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia beatae nemo unde distinctio nostrum earum dolore
                    cupiditate sed rerum nam voluptas, suscipit ratione soluta
                    explicabo, iure, ullam maiores numquam? Earum.
                  </p>
                  <a href="#">
                    <button className="animated-button">
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                      <span className="text">Read More</span>
                      <span className="circle" />
                      <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-up-section" style={{ padding: "5rem 0rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 py-3 py-xl-0">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fa fa-globe" />
                </div>
                <div className="counter-content">
                  <h3>Web Development</h3>

                  <h2 data-max={50} className="counter-value">
                    <div className="d-flex gap-2 justify-content-center">
                      <AnimateOnScroll maxValue={10} /> +
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 py-3 py-xl-0">
              <div className="counter blue">
                <div className="counter-icon">
                  <i className="fa fa-rocket" />
                </div>
                <div className="counter-content">
                  <h3>Web Design</h3>
                  <h2 data-max={50} className="counter-value">
                    <div className="d-flex gap-2 justify-content-center">
                      <AnimateOnScroll maxValue={7} /> +
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 py-3 py-xl-0">
              <div className="counter red">
                <div className="counter-icon">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="counter-content">
                  <h3>Web Design</h3>
                  <h2 data-max={50} className="counter-value">
                    <div className="d-flex gap-2 justify-content-center">
                      <AnimateOnScroll maxValue={2} /> +
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 py-3 py-xl-0">
              <div className="counter gray">
                <div className="counter-icon">
                  <i className="fa fa-mobile" />
                </div>
                <div className="counter-content">
                  <h3>Web Design</h3>
                  <h2 data-max={50} className="counter-value">
                    <div className="d-flex gap-2 justify-content-center">
                      <AnimateOnScroll maxValue={3} /> +
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="large-container">
          <div className="sec-title p-4">
            <span className="title">Testimonial</span>
            <h2>What Our core client say ?</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-8">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      mousewheel={true}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      modules={[Mousewheel, Pagination]}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide>
                        <div className="testimonial m-1">
                          <div className="card  border-0 rounded w-100 h-100 p-0 p-lg-5">
                            <div class="card-body">
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content.
                              </p>
                              <div className="d-flex gap-3 align-items-center mt-5">
                                <div className="image">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <div className="name">Showkat Ali</div>
                                  <div className="title">
                                    Front End Developer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial m-1">
                          <div className="card  border-0 rounded w-100 h-100 p-5">
                            <div class="card-body">
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content.
                              </p>
                              <div className="d-flex gap-3 align-items-center mt-5">
                                <div className="image">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <div className="name">Showkat Ali</div>
                                  <div className="title">
                                    Front End Developer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial m-1">
                          <div className="card  border-0 rounded w-100 h-100 p-5">
                            <div class="card-body">
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content. Some quick example text to build on the
                                card title and make up the bulk of the card's
                                content.
                              </p>
                              <div className="d-flex gap-3 align-items-center mt-5">
                                <div className="image">
                                  <img
                                    src={slider_image_two}
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <div className="name">Showkat Ali</div>
                                  <div className="title">
                                    Front End Developer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="thumb-layer paroller">
            <figure className="image">
              <img
                src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="case-studies-section"
        style={{ backgroundColor: "#01f0f415", padding: "5rem 0rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="sticky-top">
                <div className="case-study">
                  <h2 className="fs-1 fw-bold">Case Study</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus modi deleniti ipsum rem illum doloribus labore
                    atque, cum nemo ipsa beatae dolores voluptatibus?
                    Dignissimos ex, a provident sapiente impedit non.
                  </p>
                  <a
                    href="#"
                    className="animated-button text-dark py-5 py-md-1"
                  >
                    Read More
                    <svg
                      className="pxl-svg-line"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 407"
                    >
                      <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <section className="section-background parallax position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax1 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax2 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
              <section className="section-background parallax3 position-relative">
                <a
                  href=""
                  className="position-absolute bottom-0 end-0 text-white animated-button m-4"
                >
                  Read More
                  <svg
                    className="pxl-svg-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 407"
                  >
                    <path d="M972.93,86.54S671-39.25,337.37,29.6c-80.16,16.54-161,42.55-230.72,86.3-41.44,26-92,65.5-97.81,118.12-6,54.11,45,90.17,88,110.52,70.87,33.53,149.4,43.59,226.73,49.23,125.73,9.17,252.43,1.74,377.33-14.07,51.43-6.5,102.76-14.71,152.76-28.37,61-16.66,156.08-57.51,137.63-137.73C979.5,162.21,933.23,134.78,887,117.4,814.24,90,734.45,79.35,657.54,71.31c-7-.73-13.94-1.42-20.93-2"></path>
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="clients p-5">
        <div className="row">
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-letter-section" style={{ margin: "5rem 0rem" }}>
        <div className="container">
          <div className="card border-0 shadow p-1 p-xl-4 position-relative">
            <div
              className="position-absolute top-0 end-0"
              style={{
                width: 80,
                height: 80,
                marginRight: "-30px",
                marginTop: "-30px",
              }}
            >
              <img src={News_letter_img_three} className="img-fluid" />
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-6">
                <img
                  src={News_letter_img_one}
                  className="img-fluid rounded"
                  alt="Here is an image"
                />
              </div>
              <style
                dangerouslySetInnerHTML={{ __html: "\n\n                    " }}
              />
              <div className="col-sm-6 col-xl-6">
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  <div className="card bg-transparent border-0">
                    <div className="text-center">
                      <img
                        src={News_letter_img_two}
                        className="img-fluid w-25"
                        alt="Here is an image"
                      />
                      <span className="d-block mt-3">
                        Subscribe to our newsletter in order not to miss new
                        arrivals
                        <br /> promotions and discounts of our store
                      </span>
                    </div>
                    <div className="mx-1 mx-xl-5 my-3">
                      <div className="h-search-form">
                        <form action="#">
                          <input
                            type="search"
                            name="search"
                            className="ps-3"
                            placeholder="Enter Email"
                          />
                          <button>Subscribe</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
