import React from 'react';

const Subcription = () => {
    return (
        <div className='subcription'>
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className='email-section'>
                <input type='email' placeholder='Write your email...' />
                <a href='/send'>Subcribe</a>
            </div>
        </div>
    );
};

export default Subcription;
