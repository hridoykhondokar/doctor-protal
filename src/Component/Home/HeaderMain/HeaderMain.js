import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <div style={{height:'600px'}} className='row d-flex align-items-center'>
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3A4256'}}>Your new Smile <br /> Start Here</h1>
                    <p className='text-secondary pt-3 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero iure rerum quas, veniam, incidunt numquam maxime fuga non dolore enim ea iste. Dolorem voluptatibus voluptatum facere sint, unde voluptates?
                    </p>
                    <button className="btn text-white p-3 mt-3 btn-brand">
                        GET APPOINTMENT
                    </button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;