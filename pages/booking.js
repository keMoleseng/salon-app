import React, { Suspense, useState } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import styles from '../styles/booking.module.css'

const staffMember = ["","Lucy", "Lebo", "Lerato"];
const treatmentType = ["", "Hair", "Make Up", "Spa"];

export default function Booking() {
    const [value, onChange] = useState(new Date());
    return (
      
    <>
      <Navbar />
      <h1 className={styles.heading}>Book Appointment</h1>
      <div className={styles.booking_container}>
        
        <Calendar onChange={(value, event) => alert('New date is: ', onChange)} />

        <form id="appointments" 
              className={styles.booking_form}
        >
          <label>Select a Beautician: </label>
            <select name="beautician" required>
              <option value="">Select a Beautician</option>
              <option value="lucy">Lucy</option>
              <option value="lebo">Lebo</option>
              <option value="lerato">Lerato</option>
            </select>
          <label>Select a Treatment:</label>
          <select name="treatment" required>
            <option value="">Select a Treatment</option>
            <option value="hair">Hair</option>
            <option value="makeup">Make Up</option>
            <option value="spa">Spa</option>
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
          

          
        </form>
      </div>
      <Card />
    </>
    )
}