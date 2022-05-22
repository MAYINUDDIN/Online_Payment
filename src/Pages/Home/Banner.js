import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../assets/img/payment.jpg';

const Banner = () => {
    return (

        <div className="row lg:flex">
            <div className="col-md-4 shadow-xl lg:flex shadow-xl p-2 mr-1">
                <img className='w-100 md:w-1/5 lg:w-1/2 rounded' src={payment} alt="" />

                <div className='ml-5 lg:py-16'>
                    <h2 class="card-title font-bold text-end drop-shadow">  Pay Premium  </h2>
                    <h6 className='text-justify text-md'>Click to Pay your Premium Through Card/bKash/Online Banking</h6>
                    <div class="justify-left mt-5">
                        <button class="bg-gradient-to-r from-cyan-500 to-blue-500 btn btn-success font-bold hover:to-success-500 rounded w-38 text-white outline-zinc-600 font-bold"> <Link to='/payment_channel'>PAYMENT NOW </Link>  </button>
                    </div>
                </div>


            </div>


            <div className="col-md-4 shadow-xl  lg:flex shadow-xl p-5 ml-1">

                <div className='pl-5  py-14'>
                    <h2 class="card-title font-bold text-justify text-md drop-shadow ">How to Pay Your Premium</h2>
                    <h6 className='text-justify text-sm'>Learn about the available online channels of Fareast Premium Payment and how to pay through each channel.</h6>
                    <div class="justify-left mt-5">
                        <button class="bg-gradient-to-r  from-cyan-500 to-blue-500 btn btn-success  hover:to-success-500 rounded w-32 text-white  font-bold">LEARN MORE</button>
                    </div>
                </div>

            </div>

        </div>





    );
};

export default Banner;