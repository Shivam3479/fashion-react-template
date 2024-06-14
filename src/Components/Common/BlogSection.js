import React from "react";
const BlogSection=()=>{
    return(<>
    <section className="blog__section section--padding pt-0">
            <div className="container-fluid">
                <div className="section__heading text-center mb-40">
                    <h2 className="section__heading--maintitle">From The Blog</h2>
                </div>
                <div className="blog__section--inner blog__swiper--activation">
                    <div className="row">
                        <div className="swiper-slide col-md-3 col-sm-6">
                            <div className="blog__items">
                                <div className="blog__thumbnail">
                                    <a className="blog__thumbnail--link" href="blog-details.html"><img
                                            className="blog__thumbnail--img" src="assets/img/blog/blog1.png"
                                            alt="blog-img"/></a>
                                </div>
                                <div className="blog__content">
                                    <span className="blog__content--meta">February 03, 2022</span>
                                    <h3 className="blog__content--title"><a href="blog-details.html">Fashion Trends In 2021
                                            Styles,
                                            Colors, Accessories</a></h3>
                                    <a className="blog__content--btn primary__btn" href="blog-details.html">Read more </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide col-md-3 col-sm-6">
                            <div className="blog__items">
                                <div className="blog__thumbnail">
                                    <a className="blog__thumbnail--link" href="blog-details.html"><img
                                            className="blog__thumbnail--img" src="assets/img/blog/blog2.png"
                                            alt="blog-img"/></a>
                                </div>
                                <div className="blog__content">
                                    <span className="blog__content--meta">February 03, 2022</span>
                                    <h3 className="blog__content--title"><a href="blog-details.html">Meet the Woman Behind
                                            Cool
                                            Ethical Label Refor </a></h3>
                                    <a className="blog__content--btn primary__btn" href="blog-details.html">Read more </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide col-md-3 col-sm-6">
                            <div className="blog__items">
                                <div className="blog__thumbnail">
                                    <a className="blog__thumbnail--link" href="blog-details.html"><img
                                            className="blog__thumbnail--img" src="assets/img/blog/blog3.png"
                                            alt="blog-img"/></a>
                                </div>
                                <div className="blog__content">
                                    <span className="blog__content--meta">February 03, 2022</span>
                                    <h3 className="blog__content--title"><a href="blog-details.html">Lauryn Hill Could Make
                                            Tulle
                                            Skirt and Cowboy</a></h3>
                                    <a className="blog__content--btn primary__btn" href="blog-details.html">Read more </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide col-md-3 col-sm-6">
                            <div className="blog__items">
                                <div className="blog__thumbnail">
                                    <a className="blog__thumbnail--link" href="blog-details.html"><img
                                            className="blog__thumbnail--img" src="assets/img/blog/blog4.png"
                                            alt="blog-img"/></a>
                                </div>
                                <div className="blog__content">
                                    <span className="blog__content--meta">February 03, 2022</span>
                                    <h3 className="blog__content--title"><a href="blog-details.html">Fashion Trends In 2021
                                            Styles,
                                            Colors, Accessories</a></h3>
                                    <a className="blog__content--btn primary__btn" href="blog-details.html">Read more </a>
                                </div>
                            </div>
                        </div>                       
                    </div>                   
                </div>
            </div>
        </section>
    </>)
}
export default BlogSection;