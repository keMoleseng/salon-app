import { useState } from "react";
import { useEffect } from "react";

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
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(KEYS.appointment) === null) 
            localStorage.setItem(KEYS.appointment, JSON.stringify([])); 
            return JSON.parse(localStorage.getItem(KEYS.appointment));
    }
}

export function checkAvailTime(date, time, treatment) {
    const [isAvail, setIsAvail] = useState(true);

    useEffect(() => {
       const appointments = JSON.parse(localStorage.getItem(KEYS.appointment));

       if(appointments === null) 
        return console.log('localStorage is null');
       else{
        for (let appointment of appointments) {
            if(new Date(appointment.date).toDateString() === new Date(date).toDateString() && appointment.time === time && appointment.treatment === treatment)
                setIsAvail(false);
               
        }
        }
    }, [date, time, treatment])
   return isAvail;
}

