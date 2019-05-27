import React from "react";
import Header from './Header';
import CalendarDays from './CalendarDays';
import CalendarCells from './CalendarCells';
import dateFns from "date-fns";
import fetchCall from '../common/fetchCall';

class MonthViewCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentMonth: new Date("2015", "4"),
        selectedDate: new Date(),
        eventData: []
    }
    this.handlePrevMonthClick = this.handlePrevMonthClick.bind(this);
    this.handleNextMonthClick = this.handleNextMonthClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData () {
    const monthStart = dateFns.format(dateFns.startOfMonth(this.state.currentMonth), 'YYYY, MM, DD' );
    const monthEnd = dateFns.format(dateFns.endOfMonth(dateFns.startOfMonth(this.state.currentMonth)), 'YYYY, MM, DD');
    fetchCall(monthStart, monthEnd)
    .then((data) => {
      this.setState({ eventData: data });
    });
  }

  handleNextMonthClick = () => {
    this.setState({ currentMonth: dateFns.addMonths(this.state.currentMonth, 1)}, () => this.fetchData());
  }

  handlePrevMonthClick = () => {
    this.setState({currentMonth: dateFns.subMonths(this.state.currentMonth, 1)}, () => this.fetchData());
  }
  
  render() {
    return (
      <div className="calendar">
        <Header
            currMonth={this.state.currentMonth}
            prevMonthClickHandler={this.handlePrevMonthClick}
            nextMonthClickHandler={this.handleNextMonthClick}
        />
        <CalendarDays
          currentMonth={this.state.currentMonth}
        />
        <CalendarCells 
            currentMonth={this.state.currentMonth}
            selectedDate={this.state.selectedDate}
            eventData={this.state.eventData}
        />
      </div>
    );
  }
}

export default MonthViewCalendar;