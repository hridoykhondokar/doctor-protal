import React from 'react';
import './ContactFrom.css';

const ContactFrom = () => {
    
    return (
        <section className='contact-container'>
            <div className="container">
                <div className='from-heading text-center '>
                    <h3 style={{color:'#1CC7C1'}} className='text-uppercase pt-5'>contact us</h3>
                    <h1 className='text-white '>Always Connect With Us</h1>
                </div>
                <form action="">
                       <div className="form-group mt-5">
                           <input type="text" className="form-control p-3" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mt-3">
                           <input type="text" className="form-control p-3" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mt-3">
                           <textarea name="" className="form-control p-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center mt-3">
                       <button className="btn text-white p-2 text-uppercase btn-brand"> Submit </button>
                       </div>
                   </form>
            </div>
        </section>
    );
};

export default ContactFrom;