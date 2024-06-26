import React from "react";
const SpecialOffer =()=>{
    return(
        <>
        <section className="banner__section section--padding pt-0">
            <div className="container-fluid">
                <div className="row row-cols-md-2 row-cols-1 mb--n28">
                    <div className="col mb-28">
                        <div className="banner__items position__relative">
                            <a className="banner__items--thumbnail " href="shop.html"><img
                                    className="banner__items--thumbnail__img banner__img--max__height"
                                    src="assets/img/banner/banner5.png" alt="banner-img" />
                                <div className="banner__items--content">
                                    <span className="banner__items--content__subtitle d-none d-lg-block">Pick Your
                                        Items</span>
                                    <h2 className="banner__items--content__title h3">Up to 25% Off Order Now</h2>
                                    <span className="banner__items--content__link"><u>Shop now</u></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col mb-28">
                        <div className="banner__items position__relative">
                            <a className="banner__items--thumbnail " href="shop.html"><img
                                    className="banner__items--thumbnail__img banner__img--max__height"
                                    src="assets/img/banner/banner6.png" alt="banner-img" />
                                <div className="banner__items--content">
                                    <span className="banner__items--content__subtitle d-none d-lg-block">Special
                                        offer</span>
                                    <h2 className="banner__items--content__title h3">Up to 35% Off Order Now</h2>
                                    <span className="banner__items--content__link"><u>Discover Now</u> </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default SpecialOffer;