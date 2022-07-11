import React, { Suspense } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';


export default function Booking() {
    return (
    <div>
      <Navbar />
      <Calendar />
    </div>
    )
}