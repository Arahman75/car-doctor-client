// import React, { useEffect, useState } from 'react';
import Service from './Service';
import useServices from '../../../hooks/useServices';
import { useState } from 'react';

const Services = () => {
    //DRY ===> Do not repeat yourself 
    const [asc, setAsc] = useState(true);
    const services = useServices(asc)


    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })
    // }, [services])


    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h2 className='text-[#FF3811] text-lg font-bold'>Service</h2>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='py-4'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <button onClick={() => setAsc(!asc)}
                    className='btn btn-secondary'>
                    {asc ? 'Price : High to Low' : 'Price : Low to High'}
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;