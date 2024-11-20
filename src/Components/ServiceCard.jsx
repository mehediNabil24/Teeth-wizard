import React from 'react';

const ServiceCard = ({service}) => {
    const {treatment,image,description,cost}= service;
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {treatment}
      <div className="badge badge-secondary">${cost}</div>
    </h2>
    <p>{description.slice(0,200)}</p>
    <div className="card-actions justify-end">
      <div className="badge btn badge-outline ">Checkout More</div>
      
    </div>
  </div>
</div>
    );
};

export default ServiceCard;