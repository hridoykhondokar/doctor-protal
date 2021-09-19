import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');



const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {


       

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       
        console.log(data)

        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        const appointmentDate = month + '-' + day + '-' + year;
        // return month + '/' + day + '/' + year;

        data.service = appointmentOn;
        data.date = appointmentDate;
        data.created =new Date()

       


          fetch('http://localhost:5000/addAppointment', { 
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          })
            .then(res => {
                res.json()
                if(res.status === 200){
                    closeModal();
                    alert('Appointment created successfully');
                }

                else{
                    closeModal();
                    alert('Appointment created not successfully');
                }
            });

        };


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-brand text-center pb-3'>{appointmentOn}</h2>
                <p className="text-secondary text-center text-bold"><small>ON {date.toDateString()}</small></p>

                <form onSubmit={handleSubmit(onSubmit)}>
                   
                   <div className="form-group ">
                   <input type="text" name="name" className="form-control mb-2" placeholder="Your Name" required {...register("name", { required: true })} />
                   {errors.name && <span className="text-danger">This field is required</span>}
                   </div>

                   <div className="form-group">
                   <input type="text" name="phone" className="form-control mb-2" placeholder="Phone Number" required {...register("phone", { required: true })} />
                   {errors.phone && <span className="text-danger">This field is required</span>}
                   </div>
                   <div className="form-group">
                   <input type="text" name="email" className="form-control mb-2" placeholder="Your Email" required {...register("email", { required: true })} />
                   {errors.email && <span className="text-danger">This field is required</span>}
                   </div>

                   <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" required {...register("gender", { required: true })} >
                                <option disabled={true} value='Not set'>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input required {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input required {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-left mt-2">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default AppointmentForm;
