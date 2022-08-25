const KEYS = {
    appointment: "appointment",
    appointmentId: 'appointmentId'
}

export function saveAppointment(data){
    const appointmentList = getAllAppointments();
    data['id'] = generateAppointmentId();
    appointmentList.push(data);
    localStorage.setItem(KEYS.appointment, JSON.stringify(appointmentList));
}



export function generateAppointmentId() {
    if(localStorage.getItem(KEYS.appointmentId) === null) 
        localStorage.setItem(KEYS.appointmentId, '0');
    
        var id = parseInt(localStorage.getItem(KEYS.appointmentId), 10);
        localStorage.setItem(KEYS.appointmentId, ((++id).toString()))
        return id;
}

export function getAllAppointments() {
    if (localStorage.getItem(KEYS.appointment) === null) 
        localStorage.setItem(KEYS.appointment, JSON.stringify([])); 
        return JSON.parse(localStorage.getItem(KEYS.appointment));
}

export function checkAvailTime(data, day, timeState) {
    let currentAppointments = getAllAppointments();

    for(let currentAppointment of currentAppointments){
        if(currentAppointment.time === data.time && new Date(currentAppointment.date) === day)
            timeState.showTime = false
    }
}
