import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const containerStyles = {
    backgroundColor: '#f4fdfb',
    height: '100%',
}

const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([])
    const handleDateChange = date => {

       
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        const appointmentDate = month  + day  + year;
        setSelectedDate(appointmentDate)
    


    }

    useEffect(() => {
        console.log(selectedDate)
         
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ date: selectedDate})
        })
            .then(res => res.json())
            .then(data => setAppointment(data))
    },[selectedDate])

    return (
        <section>
            <div style={containerStyles} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointment={appointment}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;