import React from 'react';
import dateFns from "date-fns";
import fetchCall from '../common/fetchCall';
import DayHeader from '../components/DayHeader';
import DayGrid from '../components/DayGrid';

class DayView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentDay: new Date(),
            
        }
        this.handlePrevDayClick = this.handlePrevDayClick.bind(this);
        this.handleNextDayClick = this.handleNextDayClick.bind(this);
    }

    componentDidMount() {
        const startOfMonth = dateFns.startOfMonth(this.props.currentMonth);
        if (startOfMonth) {
            this.setState({ currentDay: startOfMonth }, () => this.fetchData());
        }
    }

    fetchData () {
        const dayStart = this.state.currentDay;
        const dayEnd = dateFns.endOfDay(this.state.currentDay); 
        fetchCall(dayStart, dayEnd)
        .then((data) => {
            this.setState({ eventData: data });
        });
    }
    
    handleNextDayClick = () => {
        this.setState({ currentDay: dateFns.addDays(this.state.currentDay, 1)}, () => this.fetchData());
    }

    handlePrevDayClick = () => {
        this.setState({currentDay: dateFns.subDays(this.state.currentDay, 1)}, () => this.fetchData());
    }

    render () {
        return (
            <div className="day_view">
                <DayHeader
                    currentDay={this.state.currentDay}
                    prevDayClickHandler={this.handlePrevDayClick}
                    nextDayClickHandler={this.handleNextDayClick}
                />
                <DayGrid
                
                />
            </div>
        );
    }
}

export default DayView;