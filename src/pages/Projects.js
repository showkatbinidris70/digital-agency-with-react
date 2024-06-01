import React from 'react'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'

export default function Projects() {
    return (
        <div>
            <section class="breadcrumb w-100">
                <div class="container">
                    <div class="row">
                        <h2 class="title">Our Projects </h2>
                        <div class="pt-3">
                            <h4 class="btn py-3 px-5"><a class="" href="/">Home</a> <span><i
                                class="fa-solid fa-angles-right"></i>
                                Our Projects</span></h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-section">
                <div className="container project-container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={1}>
                                <img
                                    src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 1</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={2}>
                                <img
                                    src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 2</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={3}>
                                <img
                                    src="https://images.unsplash.com/photo-1515215676803-119c88d493cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baf00747bfb9fe41ad9af8cf00dbebbf&auto=format&fit=crop&w=1350&q=80"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 3</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={4}>
                                <img
                                    src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e3be993a88feed38e4f5374ff3ba115&auto=format&fit=crop&w=1350&q=80g"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 4</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={5}>
                                <img
                                    src="https://images.unsplash.com/photo-1504875427817-937a8a12e167?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd7f399ba43093ead08e7dbf5e083f09&auto=format&fit=crop&w=1434&q=80"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 5</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-xl-4 py-3">
                            <div className="item" id={6}>
                                <img
                                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f758b0379f730e73c03b6153aaad7cf1&auto=format&fit=crop&w=1350&q=80"
                                    alt=""
                                    className="rounded"
                                />
                                <div className="text">
                                    <h3>PROJECT 6</h3>
                                    <p>Short Description</p>
                                </div>
                                <div className="button">Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div id="preview" className="modal">
                    <div className="modal-content">
                        <span className="close">×</span>
                        <img id="img" src="" />
                        <div id="details">
                            <h3 id="title" />
                            <p id="info">Some text</p>
                            <div className="button" id="live">
                                View
                            </div>
                            <i className="fab fa-github-square" id="github" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
