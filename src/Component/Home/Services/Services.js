import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h1 style={{color:'rgb(58, 66, 86)'}}>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='w-75 row mt-5 pt-5'>
            {
               servicesData.map(service => <ServicesDetail service={service} key={service.name}/>) 
            }
            </div>
        </div>
        </section>
    );
};

export default Services;