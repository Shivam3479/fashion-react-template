import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeSlider = () => {
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        nav: false,
        navText: ["<", ">"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };

    return (<>
        <section className="hero__slider--section">
            <div className="hero__slider--inner hero__slider--activation">
                <div className="hero__slider--wrapper swiper-wrapper">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item">
                                <div className="hero__slider--items home1__slider--bg">
                                    <div className="container-fluid">
                                        <div className="row ">
                                            <div className="col">
                                                <div className="hero__slider--items__inner">
                                                <div className="slider__content">
                                                    <p className="slider__content--desc desc1 mb-15">
                                                        {/* <img className="slider__text--shape__icon w-100" src="assets/img/icon/text-shape-icon.png" alt="text-shape-icon" /> */}
                                                        New Collection</p>
                                                    <h2 className="slider__content--maintitle h1">The Great Fashion <br />
                                                        Collection 2022</h2>
                                                    <p className="slider__content--desc desc2 d-sm-2-none mb-40">Up To 40% Off
                                                        Final Sale Items. <br />
                                                        Caught in the Moment!</p>
                                                    <a className="slider__btn primary__btn" href="shop.html">Show Collection
                                                        <svg className="primary__btn--arrow__icon"
                                                            xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2"
                                                            viewBox="0 0 6.2 6.2">
                                                            <path
                                                                d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                                                                transform="translate(-4 -4)" fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                        </div>
                        <div className="item">
                            <div className="">
                                <div className="hero__slider--items home1__slider--bg two">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col">
                                                <div className="hero__slider--items__inner">
                                                    <div className="slider__content">
                                                        <p className="slider__content--desc desc1 mb-15">
                                                            New Collection</p>
                                                        <h2 className="slider__content--maintitle h1">The Great Fashion <br />
                                                            Collection 2022</h2>
                                                        <p className="slider__content--desc desc2 d-sm-2-none mb-40 ">Up To 40% Off
                                                            Final Sale Items. <br />
                                                            Caught in the Moment!</p>
                                                        <a className="primary__btn slider__btn" href="shop.html">Show Collection
                                                            <svg className="slider__btn--arrow__icon"
                                                                xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2"
                                                                viewBox="0 0 6.2 6.2">
                                                                <path
                                                                    d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                                                                    transform="translate(-4 -4)" fill="currentColor"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                        <div className="hero__slider--items home1__slider--bg three">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="hero__slider--items__inner">
                                            <div className="slider__content text-center">
                                                <p className="slider__content--desc desc1 mb-15">
                                                    New Collection</p>
                                                <h2 className="slider__content--maintitle h1">The Great Fashion <br/>
                                                    Collection 2022</h2>
                                                <p className="slider__content--desc desc2 d-sm-2-none mb-40">Up To 40% Off
                                                    Final Sale Items. <br/>
                                                    Caught in the Moment!</p>
                                                <a className="primary__btn slider__btn" href="shop.html">Show Collection
                                                    <svg className="slider__btn--arrow__icon"
                                                        xmlns="http://www.w3.org/2000/svg" width="20.2" height="12.2"
                                                        viewBox="0 0 6.2 6.2">
                                                        <path
                                                            d="M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z"
                                                            transform="translate(-4 -4)" fill="currentColor"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section >
    </>)
}
export default HomeSlider;