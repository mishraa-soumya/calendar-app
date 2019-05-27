import React from "react";
import MonthViewCalendar from "../components/MonthView";
import "../App.css";
import {default as DayViewCalendar} from "../components/DayView";

class CalendarContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            calendarView: 'month',
            currentMonth: new Date("2015", "4"),
            selectedDate: new Date(),
        }
        this.handleCalendarView = this.handleCalendarView.bind(this);
    }

    handleCalendarView (event) {
        const calendarView = event.target.value ? event.target.value : 'month';
        this.setState({ calendarView });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <div id="logo" className="headerElem">
                        <div className="icon">date_range</div>
                        <div>Events Calendar</div>
                        <div className="calendar_view">
                            <div className="select">
                                <select name="calendar_view" onChange={this.handleCalendarView}>
                                    <option value="month" >Months</option>
                                    <option value="day">Day</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                { this.state.calendarView === 'month' ?  
                    <MonthViewCalendar /> :
                    <DayViewCalendar 
                        currentMonth={this.state.currentMonth}
                    />
                }    
                </main>
            </div>
        );
    }
}

export default CalendarContainer;