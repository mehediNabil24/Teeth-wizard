import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Feedback from './Feedback';

const Home = () => {
    const services = useLoaderData();
    const {servicesData, feedbackData} =services;
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto mt-10 grid gap-6 grid-cols-4'>

            {
                servicesData.slice(0,4).map(service=><ServiceCard service={service} key={service.id}></ServiceCard>)
            }
            </div>
            <button className='btn btn-neutral block mx-auto mt-4'>
            <NavLink to={'/treatment'} >Show more</NavLink>
            </button>
            <Feedback feedbackData={feedbackData} ></Feedback>
        </div>
    );
};

export default Home;