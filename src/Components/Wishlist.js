import { NavLink } from "react-router-dom";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import InnerPageBanner from "./Common/InnerPageBanner";

const Wishlist =()=>{
    return (<>
    <Header/>
    <InnerPageBanner title="Wishlist"/>
    <main className="main__content_wrapper">
    <section className="cart__section section--padding">
            <div className="container">
                <div className="cart__section--inner">
                    <form action="#">
                        <h2 className="cart__title mb-40">Wishlist</h2>
                        <div className="cart__table">
                            <table className="cart__table--inner">
                                <thead className="cart__table--header">
                                    <tr className="cart__table--header__items">
                                        <th className="cart__table--header__list">Product</th>
                                        <th className="cart__table--header__list">Price</th>
                                        <th className="cart__table--header__list text-center">STOCK STATUS</th>
                                        <th className="cart__table--header__list text-right">ADD TO CART</th>
                                    </tr>
                                </thead>
                                <tbody className="cart__table--body">
                                    <tr className="cart__table--body__items">
                                        <td className="cart__table--body__list">
                                            <div className="cart__product d-flex align-items-center">
                                                <button className="cart__remove--btn" aria-label="search button"
                                                    type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" width="16px" height="16px">
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                                    </svg>
                                                </button>
                                                <div className="cart__thumbnail">
                                                    <a href="product-details.html"><img className="border-radius-5"
                                                            src="assets/img/product/product1.png"
                                                            alt="cart-product"/></a>
                                                </div>
                                                <div className="cart__content">
                                                    <h4 className="cart__content--title"><a
                                                            href="product-details.html">Fresh-whole-fish</a></h4>
                                                    <span className="cart__content--variant">COLOR: Blue</span>
                                                    <span className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__table--body__list">
                                            <span className="cart__price">&#8377;65.00</span>
                                        </td>
                                        <td className="cart__table--body__list text-center">
                                            <span className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td className="cart__table--body__list text-right">
                                            <a className="wishlist__cart--btn primary__btn" href="cart.html">Add To Cart</a>
                                        </td>
                                    </tr>
                                    <tr className="cart__table--body__items">
                                        <td className="cart__table--body__list">
                                            <div className="cart__product d-flex align-items-center">
                                                <button className="cart__remove--btn" aria-label="search button"
                                                    type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" width="16px" height="16px">
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                                    </svg>
                                                </button>
                                                <div className="cart__thumbnail">
                                                    <a href="product-details.html"><img className="border-radius-5"
                                                            src="assets/img/product/product2.png"
                                                            alt="cart-product"/></a>
                                                </div>
                                                <div className="cart__content">
                                                    <h4 className="cart__content--title"><a
                                                            href="product-details.html">Vegetable-healthy</a></h4>
                                                    <span className="cart__content--variant">COLOR: Blue</span>
                                                    <span className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__table--body__list">
                                            <span className="cart__price">&#8377;65.00</span>
                                        </td>
                                        <td className="cart__table--body__list text-center">
                                            <span className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td className="cart__table--body__list text-right">
                                            <a className="wishlist__cart--btn primary__btn" href="cart.html">Add To Cart</a>
                                        </td>
                                    </tr>
                                    <tr className="cart__table--body__items">
                                        <td className="cart__table--body__list">
                                            <div className="cart__product d-flex align-items-center">
                                                <button className="cart__remove--btn" aria-label="search button"
                                                    type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" width="16px" height="16px">
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                                    </svg>
                                                </button>
                                                <div className="cart__thumbnail">
                                                    <a href="product-details.html"><img className="border-radius-5"
                                                            src="assets/img/product/product3.png"
                                                            alt="cart-product"/></a>
                                                </div>
                                                <div className="cart__content">
                                                    <h4 className="cart__content--title"><a
                                                            href="product-details.html">Raw-onions-surface</a></h4>
                                                    <span className="cart__content--variant">COLOR: Blue</span>
                                                    <span className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__table--body__list">
                                            <span className="cart__price">&#8377;65.00</span>
                                        </td>
                                        <td className="cart__table--body__list text-center">
                                            <span className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td className="cart__table--body__list text-right">
                                            <a className="wishlist__cart--btn primary__btn" href="cart.html">Add To Cart</a>
                                        </td>
                                    </tr>
                                    <tr className="cart__table--body__items">
                                        <td className="cart__table--body__list">
                                            <div className="cart__product d-flex align-items-center">
                                                <button className="cart__remove--btn" aria-label="search button"
                                                    type="button">
                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24" width="16px" height="16px">
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                                    </svg>
                                                </button>
                                                <div className="cart__thumbnail">
                                                    <a href="product-details.html"><img className="border-radius-5"
                                                            src="assets/img/product/product4.png"
                                                            alt="cart-product"/></a>
                                                </div>
                                                <div className="cart__content">
                                                    <h4 className="cart__content--title"><a
                                                            href="product-details.html">Oversize Cotton Dress</a></h4>
                                                    <span className="cart__content--variant">COLOR: Blue</span>
                                                    <span className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__table--body__list">
                                            <span className="cart__price">&#8377;65.00</span>
                                        </td>
                                        <td className="cart__table--body__list text-center">
                                            <span className="in__stock text__secondary">in stock</span>
                                        </td>
                                        <td className="cart__table--body__list text-right">
                                            <NavLink className="wishlist__cart--btn primary__btn" to="/">Add To Cart</NavLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="continue__shopping d-flex justify-content-between">
                                <NavLink className="continue__shopping--link" to="/">Continue shopping</NavLink>
                                <NavLink className="continue__shopping--clear" to="/product">View All Products</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>)
}
export default Wishlist;