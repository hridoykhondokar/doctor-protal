import React from 'react';
import Image from '../../../images/Mask Group 3.png'
const FeaturedServices = () => {
    return (
        <section className='d-flex justify-content-center mt-5'>
          <div className='row w-75'>
            <div className="col-md-5">
             <img style={{width:'100%'}} src={Image} alt=""/>
            </div>
            <div className="col-md-7">
              <h1 style={{color:'rgb(58, 66, 86)'}} className='pt-3'>Exceptional Dental <br/> Care, on Your Terms</h1>
              <p className='text-secondary pt-5 pb-5' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus harum, vitae adipisci commodi possimus iusto ipsa laudantium dolor, ratione sapiente cupiditate, amet nisi enim ipsam architecto quam laboriosam reprehenderit.
              Explicabo recusandae molestias accusamus! Officia nostrum nam totam labore ea illo doloremque, officiis accusamus quos rerum magni doloribus, exercitationem placeat suscipit mollitia in unde dicta? Enim assumenda pariatur nihil ad?
              Eaque quaerat nemo sunt laborum fugiat, id architecto neque! Autem, consequatur similique rem, eum dolorum accusamus deleniti ullam at quos nam itaque porro,lit, obcaecati </p>
              <button className="btn text-white p-2 btn-brand">
                        Learn More
                    </button>
            </div>
          </div>
        </section>
    );
};

export default FeaturedServices;