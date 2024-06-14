import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialData from "./TestimonialData";

const Testimonials = () => {
    const options = {
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    const testimonialDetail = [
        {
            key: 1,
            tprofile: "assets/img/other/testimonial-thumb1.png",
            title: "Nike Mardson",
            subtitle: "Fashion",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            key: 2,
            tprofile: "assets/img/other/testimonial-thumb1.png",
            title: "Laura Johnson",
            subtitle: "Garments",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            key: 3,
            tprofile: "assets/img/other/testimonial-thumb1.png",
            title: "Richard Smith",
            subtitle: "Lahanga Store",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            key: 4,
            tprofile: "assets/img/other/testimonial-thumb1.png",
            title: "Steven Smith",
            subtitle: "Jeans Store",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        }
    ];
   
    return (<>
        <section className="testimonial__section section--padding pt-0">
            <div className="container-fluid">
                <div className="section__heading text-center mb-40">
                    <h2 className="section__heading--maintitle">Our Clients Say</h2>
                </div>
                <div className="testimonial__section--inner testimonial__swiper--activation swiper">
                    <OwlCarousel className="owl-theme" {...options}>
                          {testimonialDetail.map((val)=>{
                            return(<TestimonialData
                                key={val.key}
                                tprofile={val.tprofile}
                                title={val.title}
                                subtitle={val.subtitle}
                                description={val.description}
                            />);
                          })}                      
                    </OwlCarousel>
                </div>
            </div>
        </section>
    </>)
};
export default Testimonials;