import { NavLink } from "react-router-dom";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import InnerPageBanner from "./Common/InnerPageBanner";

const ErrorPage = () => {
    return (<>
    <Header/>
    <InnerPageBanner title="Oops..."/>
    <main className="main__content_wrapper">
        <section className="error__section section--padding">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="error__content text-center">
                            <img className="error__content--img mb-50" src="assets/img/other/404-thumb.png" alt="error-img" />
                                <h2 className="error__content--title">Opps ! We,ar Not Found This Page </h2>
                                <p className="error__content--desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Excepturi animi aliquid minima assumenda.</p>
                                <NavLink className="error__content--btn primary__btn" to="/">Back To Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>);
}
export default ErrorPage;