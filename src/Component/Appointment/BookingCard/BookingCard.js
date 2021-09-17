import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='col-md-4 '>
            <div className="Booking-card shadow p-5 mb-5 mt-5 bg-white rounded text-center">
                <div className="Booking-body">
                    <h5 className='Booking-title text-brand '>{booking.subject}</h5>
                    <h6 className="pt-2">{booking.visitingHour}</h6>
                    <small className='text-secondary'>{booking.totalSpace} SPACES AVAILABLE</small>
                    <button onClick={openModal} className='btn btn-brand mt-3'>Booking Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;