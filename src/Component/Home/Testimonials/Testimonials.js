import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import ema from '../../../images/ema.png';



const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : ema
    }
]

const Testimonials = () => {
    return (
        <section className='testimonials-container'>
           <div className='container'>
              <h5 style={{color:'#1CC7C1' , textWeight:'bold'}} className='pt-5 text-uppercase'>Testimonials</h5>
              <h1 style={{color:'#3A4256' , textWeight:'bold'}}>What's Our Patients <br/>says</h1>
              <div className="row">
                  {
                      testimonialData.map(testimonials => <TestimonialCard testimonials={testimonials} key={testimonials.name}/>)
                  }
              </div>
           </div>
        </section>
    );
};

export default Testimonials;