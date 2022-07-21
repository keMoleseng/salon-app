  import React, { Suspense, useState } from 'react';
  import Calendar from 'react-calendar';
  import Navbar from '../components/Navbar';
  import Card from '../components/Card';
  import Times from '../components/Times';
  import styles from '../styles/booking.module.css';

  


  export default function Booking() {
      const [date, setDate] = useState(new Date());
      const [showTime, setShowTime] = useState(false);  
      const [event, setEvent] = useState(null);
      const [stylist, setStylist] = useState('');
      const [confirm, setConfirm] = useState(false);

      const handleAppointment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setConfirm(true);
        setStylist(formProps.beautician)
        e.target.reset();
      }

      console.log(stylist)
      const displayInfo = (time) => {
        setEvent(time)
      }
      
      return (
        
      <>
        <Navbar />
        <h1 className={styles.heading}>Book Appointment</h1>
        <div className={styles.booking_container}>
          
          <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
          
          {showTime ? <Times date={date} event={event} handleTimeClick={displayInfo} /> : null}

          <form id="appointments" 
                className={styles.booking_form}
                onSubmit={handleAppointment}
          >
            <label>Select a Beautician: </label>
              <select name="beautician" required>
                <option value="">Select a Beautician</option>
                <option value="Lucy" id="Lucy">Lucy</option>
                <option value="Lebo" id="Lebo">Lebo</option>
                <option value="Lerato" id="Lerato">Lerato</option>
              </select>
            <label>Select a Treatment:</label>
            <select name="treatment" required>
              <option value="">Select a Treatment</option>
              <option value="hair" id="Hair">Hair</option>
              <option value="makeup" id="MakeUp">Make Up</option>
              <option value="spa" id="Spa">Spa</option>
            </select>
            <label>Name:</label>
            <input type="text"
                  form="appointments" 
                  name="name" 
                  placeholder="Enter your name"
                  required
            />
            <label>Email:</label>
            <input type="email"
                  form="appointments"
                  name="email"
                  placeholder="Enter your email address"
                  required
            />
            <button className={styles.booking_button} type='submit'>Confirm booking</button>  
          </form>
        </div>
        <h4>{confirm ? `Your appointment has been confirmed for ${event} ${date.toString().slice(0, 16)} with ${stylist}!` : null}</h4>
        <Card />
      </>
      )
  }