import dateFunc from 'date-fns';

export function getDayEvent(eventObj, day) {
    let data = eventObj.filter((event) => {
        const eventStartDate = new Date(event.startTime);
        const eventEndDate = new Date(event.endTime);
        return (dateFunc.isSameDay(eventStartDate, day) || dateFunc.isSameDay(eventEndDate, day));
    });

    return data;
}