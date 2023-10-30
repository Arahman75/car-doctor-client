import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 border-white border-8 absolute -bottom-14 right-24 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4 space-y-5'>
                    <h2 className='text-[#FF3811] text-lg font-semibold'>About Us</h2>
                    <h1 className="text-5xl font-bold leading-snug">We are qualified <br /> & of experience <br />in this field</h1>
                    <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;