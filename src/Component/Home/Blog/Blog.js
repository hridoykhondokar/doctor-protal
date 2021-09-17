import React from 'react';
import wilson from '../../../images/wilson.png'
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Caudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blog = () => {
    return (
        <section className='blog-container'>
            <div className='container'>
                <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}className=" text-uppercase">Our blog</h5>
                    <h1 style={{color:'rgb(58, 66, 86)'}}>From Our Blog News</h1>
                </div>
                <div className="row">
                   {
                       blogData.map(data => <BlogCard data={data} key={data.title}/>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Blog;