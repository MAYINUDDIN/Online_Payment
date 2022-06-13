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
                        <Link to='/payment_channel'>  <button class="bg-gradient-to-r from-cyan-500 to-blue-500 btn btn-success font-bold hover:to-success-500 rounded w-38 text-white outline-zinc-600 font-bold"> PAYMENT NOW  </button> </Link>
                    </div>
                </div>


            </div>


            <div className="col-md-4 shadow-xl  lg:flex shadow-xl p-5 ml-1">

                <div className='pl-5  py-14'>
                    <h2 class="card-title font-bold text-justify text-md drop-shadow ">How to Pay Your Premium</h2>
                    <h6 className='text-justify text-sm'>Learn about the available online channels of Fareast Premium Payment and how to pay through each channel.</h6>
                    <div class="justify-left mt-5">
                        <label for="details" class="btn modal-button bg-gradient-to-r  from-cyan-500 to-blue-500 btn btn-success  hover:to-success-500 rounded w-32 text-white  font-bold">LEARN MORE</label>
                    </div>
                </div>





                <input type="checkbox" id="details" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box w-11/12 max-w-3xl">
                        <h3 class="font-bold text-lg">Welcome to Online Payment</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label for="details" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                    </div>
                </div>

            </div>




        </div>





    );
};

export default Banner;