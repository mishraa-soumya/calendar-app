import React from 'react';

class DayGrid extends React.Component {
    render () {
        const timeFrame = [
            '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00' 
        ]; 
        return(
            <div className="day-grid">
                { 
                    timeFrame.map((time) => {
                        return (
                            <div className="day_grid_row"> 
                                <div className="grid_time_col">
                                    {time}
                                </div>
                                <div className="grid_event_col">
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}

export default DayGrid;