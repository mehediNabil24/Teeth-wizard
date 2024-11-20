import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {cost,description,image,treatment} =useLoaderData();
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: {image},
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
      <p className="mb-5">
        {description}
      </p>
      <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>
    );
};

export default Details;