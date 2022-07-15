import React, { Suspense } from 'react';
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';


export default function Booking() {
    return (
    <div>
      <Navbar />
      <Calendar />
      <Card />
    </div>
    )
}