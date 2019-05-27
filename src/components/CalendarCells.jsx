import React from 'react';
import dateFns from "date-fns";
import * as Utils from '../common/utils';

const CalendarCells = ({currentMonth, selectedDate, eventData}) => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let eventHtml = [];
        if (eventData.length > 0) {
            const events = Utils.getDayEvent(eventData, day);
            eventHtml = events.map((event, index) => {
                const eventKey = `event_li_${index}`;
                return [
                    <li key={eventKey} className="eventItem">
                        {event.title}
                    </li>
                ];
            });
        }
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            { eventData.length > 0 && 
                <div className="events"><ul>{eventHtml}</ul></div>
            }
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
}

export default CalendarCells;
