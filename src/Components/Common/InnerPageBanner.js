import { NavLink } from "react-router-dom";
const InnerPageBanner = (props) => {
    return (<>
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">{props.title}</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><NavLink className="text-white"
                                    to="/">Home</NavLink></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">{props.title}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}
export default InnerPageBanner;