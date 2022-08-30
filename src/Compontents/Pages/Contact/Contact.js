import React from 'react';

const Contact = () => {
    return (
        <div className='my-20 p-5'>
            <h5 className='text-5xl font-bold text-primary text-center'>Contact Us</h5>

            <div className='forom-info text-center mt-20'>
                <from>
                  <input type="text" placeholder="Enter Your Name" className="input input-bordered input-primary w-full max-w-xs" required /><br/>
                  <input type="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
                  <input type="number" placeholder="Enter Your Number" className="input input-bordered input-primary w-full max-w-xs mt-5"  required/><br/>
                  <textarea className="textarea textarea-primary w-full max-w-xs mt-5" placeholder="Enter Your message" required></textarea><br/>
                  <input type="submit" value="Submit"  className='btn btn-primary w-1/4 mx-auto hover:text-white  required '/>

                </from>
            </div>
        </div>
    );
};

export default Contact;