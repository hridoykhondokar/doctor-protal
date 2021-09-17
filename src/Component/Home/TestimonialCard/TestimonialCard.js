import React from 'react';

const TestimonialCard = ({ testimonials }) => {

    return (
        <div className='col-md-4'>

           <div className=' shadow p-5 mb-5 mt-5 bg-white rounded  '>
           <p>{testimonials.quote}</p>
           <div className='d-flex mt-5'>
           <img className="mx-3" src={testimonials.img} alt="" width="60"/>
            <div>
            <h6 style={{color:'#1CC7C1'}} className='pt-3'>{testimonials.name}</h6>
            <small className='text-secondary'>{testimonials.from}</small>
            </div>
           </div>
            
           </div>


        </div>
    );
};

export default TestimonialCard;