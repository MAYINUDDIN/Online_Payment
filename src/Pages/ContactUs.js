import React from 'react';
import { AiFillPhone } from "react-icons/ai";
import contact_us from '../../src/assets/img/contact_us.jpg'
const ContactUs = () => {
    return (


        <div className="row lg:flex justify-center items-center mt-0 p-3">

            <div className=" col-md-4 mt-3  md:w-1/2  lg:w-1/2">
                <h1 className='text-2xl font-bold text-success'>Contact Us</h1>
                <img src={contact_us} alt="" />

            </div>

            <div className="col-md-8  pl-2 md:w-1/2 lg:w-1/3 mt-5   items-center  lg:px-12 ">

                <div class="form-control w-screen max-w-xs mt-5">
                    <input type="text" placeholder="Your Name" class="input input-bordered border-success rounded w-full max-w-xs" />
                </div>
                <div class="form-control w-screen max-w-xs mt-3 ">
                    <input type="email" placeholder="Email Address" class="input input-bordered border-success rounded w-full max-w-xs" />
                </div>
                <div class="form-control w-screen max-w-xs mt-3">
                    <input type="text" placeholder="Mobile Number" class="input input-bordered border-success rounded w-full max-w-xs" />
                </div>

                <div class="form-control w-screen max-w-xs mt-3">
                    <textarea placeholder='comments' className='bg-[#e1f5fe] p-3'>
                    </textarea>
                </div>

                <div class="form-control w-screen max-w-xs mt-3">

                    <button className='btn btn-success rounded text-white font-bold text-md'>SUBMIT</button>
                </div>

            </div>
        </div>

    );
};

export default ContactUs;