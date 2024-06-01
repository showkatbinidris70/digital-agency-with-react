import React from 'react'
import Hero from '../components/hero/Hero'
import News_letter_img_one from '../assets/images/pexels-goumbik-653429.jpg'
import News_letter_img_two from '../assets/images/undefined - Imgur.png'
import News_letter_img_three from '../assets/images/img-002.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
    return (
        <div>
            <Hero />

            <section className="testimonial-section" style={{ height: "100vh" }}>
                <div className="large-container">
                    <div className="sec-title">
                        <span className="title">Testimonial</span>
                        <h2>What Our core client say ?</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                        >
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-block">
                                                        <div className="inner-box">
                                                            <div className="text">
                                                                Why is this important? Because clients want to know the
                                                                businesses they depend on for advice, are well managed in
                                                                their own right. Not only that but this event gives you the
                                                                chance to give your back-office team
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="thumb">
                                                                    <img
                                                                        src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <h4 className="name">Mahfuz Riad</h4>
                                                                <span className="designation">Ui Designer &amp; CEO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-block">
                                                        <div className="inner-box">
                                                            <div className="text">
                                                                Why is this important? Because clients want to know the
                                                                businesses they depend on for advice, are well managed in
                                                                their own right. Not only that but this event gives you the
                                                                chance to give your back-office team
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="thumb">
                                                                    <img
                                                                        src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <h4 className="name">Mahfuz Riad</h4>
                                                                <span className="designation">Ui Designer &amp; CEO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-block">
                                                        <div className="inner-box">
                                                            <div className="text">
                                                                Why is this important? Because clients want to know the
                                                                businesses they depend on for advice, are well managed in
                                                                their own right. Not only that but this event gives you the
                                                                chance to give your back-office team
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="thumb">
                                                                    <img
                                                                        src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <h4 className="name">Mahfuz Riad</h4>
                                                                <span className="designation">Ui Designer &amp; CEO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-block">
                                                        <div className="inner-box">
                                                            <div className="text">
                                                                Why is this important? Because clients want to know the
                                                                businesses they depend on for advice, are well managed in
                                                                their own right. Not only that but this event gives you the
                                                                chance to give your back-office team
                                                            </div>
                                                            <div className="info-box">
                                                                <div className="thumb">
                                                                    <img
                                                                        src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <h4 className="name">Mahfuz Riad</h4>
                                                                <span className="designation">Ui Designer &amp; CEO</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            ...
                                        </Swiper>
                                        {/* <div className="swiper-slide">
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="text">
                                                        Why is this important? Because clients want to know the
                                                        businesses they depend on for advice, are well managed in
                                                        their own right. Not only that but this event gives you the
                                                        chance to give your back-office team
                                                    </div>
                                                    <div className="info-box">
                                                        <div className="thumb">
                                                            <img
                                                                src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="name">Mahfuz Riad</h4>
                                                        <span className="designation">Ui Designer &amp; CEO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="text">
                                                        Why is this important? Because clients want to know the
                                                        businesses they depend on for advice, are well managed in
                                                        their own right. Not only that but this event gives you the
                                                        chance to give your back-office team
                                                    </div>
                                                    <div className="info-box">
                                                        <div className="thumb">
                                                            <img
                                                                src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="name">Mahfuz Riad</h4>
                                                        <span className="designation">Ui Designer &amp; CEO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-block">
                                                <div className="inner-box">
                                                    <div className="text">
                                                        Why is this important? Because clients want to know the
                                                        businesses they depend on for advice, are well managed in
                                                        their own right. Not only that but this event gives you the
                                                        chance to give your back-office team
                                                    </div>
                                                    <div className="info-box">
                                                        <div className="thumb">
                                                            <img
                                                                src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="name">Mahfuz Riad</h4>
                                                        <span className="designation">Ui Designer &amp; CEO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
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
                        <div className="col-sm-6 col-lg-6">
                            <div className="sticky-top">
                                <div style={{ paddingTop: "20rem" }}>
                                    <h2 className="fs-1 fw-bold">Case Study</h2>
                                    <p className="w-75">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Temporibus modi deleniti ipsum rem illum doloribus labore atque,
                                        cum nemo ipsa beatae dolores voluptatibus? Dignissimos ex, a
                                        provident sapiente impedit non.
                                    </p>
                                    <a href="#" className="animated-button text-dark">
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
                        <div className="col-sm-6 col-lg-6">
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
                        <div className="col-sm-6 col-lg-6 d-none">
                            <div className="card my-3">
                                <div className="case-study-images">
                                    <img
                                        src="./assets/images/slider image 1.png"
                                        className="img-fluid rounded"
                                        alt="Here is an image"
                                    />
                                    <div className="case-study-overlay" />
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
                                </div>
                            </div>
                            <div className="card my-3">
                                <div className="case-study-images">
                                    <img
                                        src="./assets/images/slider image 2.png"
                                        className="img-fluid rounded"
                                        alt="Here is an image"
                                    />
                                    <div className="case-study-overlay" />
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
                                </div>
                            </div>
                            <div className="card my-3">
                                <div className="case-study-images">
                                    <img
                                        src="./assets/images/slider image 3.png"
                                        className="img-fluid rounded"
                                        alt="Here is an image"
                                    />
                                    <div className="case-study-overlay" />
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
                                </div>
                            </div>
                            <div className="card my-3">
                                <div className="case-study-images">
                                    <img
                                        src="./assets/images/slider image 1.png"
                                        className="img-fluid rounded"
                                        alt="Here is an image"
                                    />
                                    <div className="case-study-overlay" />
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
                                </div>
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
                                marginTop: "-30px"
                            }}
                        >
                            <img src={News_letter_img_three} className='img-fluid' />
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
                                                Subscribe to our newsletter in order not to miss new arrivals
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
    )
}
