import React from "react";
import charge from "../../images/people/charge.svg";
import reliable from "../../images/people/reliable.svg";
import sustainable from "../../images/people/sustainable.svg";
import convinient from "../../images/people/convinient.svg";
import user from "../../images/people/user.svg";

const People = () => {
    const data = [
        {
            image: charge,
            title: "Fast Charging",
        },
        {
            image: reliable,
            title: "Reliable",
        },
        {
            image: sustainable,
            title: "Sustainable",
        },
        {
            image: convinient,
            title: "Convenient",
        },
        {
            image: user,
            title: "User-Friendly",
        },
    ];

    return (
        <div className="people screenSize p-2 p-md-3 overflow-hidden ">
            <div className="people-content d-flex flex-column-reverse flex-md-row  gap-3 align-items-end justify-content-between">
                <p className="people-content-para text-center text-md-start m-0">
                    Our vision is to create a <span>sustainable future.</span>
                </p>
                <h2 className="people-content-heading text-center text-md-start ">
                    Why People Love Us.
                </h2>
            </div>
            <div className="row justify-content-center justify-content-md-evenly text-center people-img">
                {data.map((item, index) => (
                    <div
                        className={`col-6 col-md-2 d-flex flex-column gap-2 align-items-center border-2 people-img-data ${index === 0 ? "" : window.screen.width < 768 ? "" : "border-start"
                            }`}
                    >
                        <img src={item.image} alt={item.title} height="50px" width="50px" />
                        <p className="people-img-text ">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;
