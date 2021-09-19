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

    const [appointment, setAppointment] = useState([])
    const [selectedDate, setSelectedDate] = useState();
    const handleDateChange = date => {
        convertedDate(date)
    }

    
    const convertedDate = (takingNewDate) => {
        let year = takingNewDate.getFullYear();
        let month = (1 + takingNewDate.getMonth()).toString().padStart(2, '0');
        let day = takingNewDate.getDate().toString().padStart(2, '0');
        const appointmentDate = month+ '-'  + day + '-'  + year;
        setSelectedDate(appointmentDate)
    }

    
    if(!selectedDate){
        convertedDate(new Date())
    }
    
    useEffect(() => {
         if(selectedDate){
             fetch(`http://localhost:5000/appointmentByDate/`+ selectedDate)
             .then(res => res.json())
             .then(data => setAppointment(data))

         }

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







