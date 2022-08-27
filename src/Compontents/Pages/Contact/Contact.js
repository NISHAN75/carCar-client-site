import React from 'react';

const Contact = () => {
    return (
        <div className='mb-20 p-5'>
            <h5 className='text-5xl font-bold text-primary text-center'>Contact Us</h5>

            <div className='forom-info text-center mt-20'>
                <from>
                  <input type="text" placeholder="Enter Your Name" class="input input-bordered input-primary w-full max-w-xs " /><br/>
                  <input type="email" placeholder="Enter Your Email" class="input input-bordered input-primary w-full max-w-xs mt-5" /><br/>
                  <input type="number" placeholder="Enter Your Number" class="input input-bordered input-primary w-full max-w-xs mt-5" /><br/>
                  <textarea class="textarea textarea-primary w-full max-w-xs mt-5" placeholder="Enter Your message"></textarea><br/>
                  <input type="submit" value="Submit"  className='btn btn-primary w-1/4 mx-auto hover:bg-white  '/>

                </from>
            </div>
        </div>
    );
};

export default Contact;