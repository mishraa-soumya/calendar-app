import React from 'react';
import dateFns from "date-fns"; // similar to moment.js

const Header = ({currMonth, prevMonthClickHandler, nextMonthClickHandler}) => {
    return (
        <div className="header row flex-middle">
        <div className="col col-start">
        <div className="icon" onClick={prevMonthClickHandler}>chevron_left</div>
        </div>
        <div className="col col-center">
        <span>
            {dateFns.format(currMonth, "MMMM YYYY")}
        </span>
        </div>
        <div className="col col-end"><div onClick={nextMonthClickHandler} className="icon">chevron_right</div></div>
        </div>
    )
};

export default Header;
