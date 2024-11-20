import React from 'react';

const Feedback = ({feedbackData}) => {
    console.log('feedback',feedbackData)
    return (
        
            <div className='grid grid-cols-4 w-11/12 mx-auto gap-5 mt-5'>
                {
                    feedbackData.map(feed => (
                        <div className="card bg-base-100  shadow-xl" key={feed.id}>
                            <div className="card-body">
                                <h2 className="card-title">{feed.name}</h2>
                                <p>{feed.review}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">More Info</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
        
        
    
};

export default Feedback;