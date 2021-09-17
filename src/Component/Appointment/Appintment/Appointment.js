import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css';

const Appointment = () => {

const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
       <main className='appointment-container'>
           <Navbar/>
           <AppointmentHeader handleDateChange={handleDateChange}/>
           <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
           
       </main>
    );
};

export default Appointment;