import React from 'react';
import arrow from '../../../images/arrow.png'

const BlogCard = (props) => {
    const { title, description, author, authorImg, date } = props.data;
    return (
        <div className='col-md-4'>
            <div className='card shadow p-5 mb-5 mt-5 bg-white rounded'>
                <div className="card-header d-flex">
                    <img className="mx-3" src={authorImg} alt="" width="60" />

                    <div>
                        <h6 className="text-primary">{author}</h6>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text text-secondary mt-4">{description}</p>
                    <img style={{width:'70px',color:'#fff'}} src={arrow} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;