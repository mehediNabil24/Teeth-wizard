import React from 'react';
import doctor from '../assets/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 w-11/12 mx-auto max-w-[800px] mt-8 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={doctor}
      className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;