import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section>
            <div className='doctor-container'>
               <div className="container">
                   <h3 style={{color:'#1CC7C1' }} className='text-center mt-4 mb-2'> Our Doctors</h3>
                   <div className="row">
                         <Doctor/>
                         <Doctor/>
                         <Doctor/>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default Doctors;