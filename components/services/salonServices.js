const KEYS = {
    appointment: "appointment",
    appointmentId: 'appointmentId'
}

export const getTreatments = () => ([
    { id: '1', title: "Hair" },
    { id: '2', title: "MakeUp" },
    { id: '3', title: "Spa"}
])

export const getBeauticians = () => ([
    { id: '1', title: "Lebo" },
    { id: '2', title: "Lucy" },
    { id: '3', title: "Lerato" }
])

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
        return localStorage.setItem(KEYS.appointment, JSON.stringify([])); 
    else
        return JSON.parse(localStorage.getItem(KEYS.appointment));
}