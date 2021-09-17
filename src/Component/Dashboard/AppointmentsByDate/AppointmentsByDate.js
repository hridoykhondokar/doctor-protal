import React from 'react';

const AppointmentsByDate = ({appointment}) => {
    console.log(appointment)
    return (
        <div>
            <h1>Appointments : {appointment.length}</h1>
        </div>
    );
};

export default AppointmentsByDate;