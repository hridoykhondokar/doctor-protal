import React from 'react';
import Blog from '../Blog/Blog';
import ContactFrom from '../ContactFrom/ContactFrom';
import Doctors from '../Doctors/Doctors';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedServices/>
            <MakeAppointment/>
            <Testimonials/>
            <Blog/>
            <Doctors/>
            <ContactFrom/>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;