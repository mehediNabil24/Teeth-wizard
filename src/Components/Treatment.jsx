import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Treatment = () => {
    const services = useLoaderData();
    return (
        <div className='w-11/12 mx-auto mt-10 grid gap-6 grid-cols-4'>

            {
                services.map(service=><ServiceCard service={service} key={service.id}></ServiceCard>)
            }
            </div>
    );
};

export default Treatment;