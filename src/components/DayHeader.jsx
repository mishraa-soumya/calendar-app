import React from 'react';
import dateFns from "date-fns"; // similar to moment.js

const DayHeader = ({currentDay, prevDayClickHandler, nextDayClickHandler, timeZone}) => {
    return (
        <div className="header row flex-middle">
            <div className="label">Today</div>
            <div className="col col-center">
                <span>
                    {dateFns.format(currentDay, "DD MMMM, YYYY")}
                </span>
            </div>
            <div className="arrows">
                <div className="icon" onClick={prevDayClickHandler}>chevron_left</div>
                <div onClick={nextDayClickHandler} className="icon">chevron_right</div>
            </div>
        </div>
    )
};

export default DayHeader;
