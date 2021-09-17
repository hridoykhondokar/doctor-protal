import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 div text-white py-5">
                        <h5 style={{color:'#1CC7C1' , textWeight:'bold'}} className=" text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a! consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn text-white p-3 mt-4 btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;