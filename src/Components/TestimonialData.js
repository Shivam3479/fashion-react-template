const TestimonialData = (props) => {
    return (<>
        <div className="item">
            <div className="testimonial__items text-center">
                <div className="testimonial__items--thumbnail">
                    <img className="testimonial__items--thumbnail__img border-radius-50" style={{ width: "100px" }}
                        src={props.tprofile} alt="testimonial-img" />
                </div>
                <div className="testimonial__items--content">
                    <h3 className="testimonial__items--title">{props.title}</h3>
                    <span className="testimonial__items--subtitle">{props.subtitle}</span>
                    <p className="testimonial__items--desc">{props.description}</p>
                    <ul className="rating testimonial__rating d-flex justify-content-center">
                        <li className="rating__list">
                            <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                    width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li className="rating__list">
                            <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                    width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li className="rating__list">
                            <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                    width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li className="rating__list">
                            <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                    width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li className="rating__list">
                            <span className="rating__list--icon">
                                <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                    width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
}
export default TestimonialData;