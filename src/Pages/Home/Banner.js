import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../assets/img/payment.jpg';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-1 gap-4 flex justify-center'>
            <h1 className='font-bold text-dark text-2xl uppercase mb-3s'>Payment Premium</h1>
            <div class="lg:card lg:card-side bg-base-100 rounded-none drop-shadow-lg ">
                <figure className='justify-left'>
                    <img className='w-96 h-fit text-left' src={payment} alt="Album" />
                </figure>
                <div class=" card-body w-60 m-0 lg:card-body w-48 m-3">
                    <h2 class="card-title font-bold text-end">  Pay Premium  </h2>
                    <h6 className='text-justify text-sm'>Click to Pay your Premium Through Card/bKash/Online Banking</h6>
                    <div class="justify-left mt-5">
                        <button class="bg-gradient-to-r from-cyan-500 to-blue-500 btn btn-success font-bold hover:to-success-500 rounded w-38 text-white outline-zinc-600font-bold"> <Link to='/payment_channel'>PAYMENT NOW </Link>  </button>
                    </div>
                </div>
                <div class=" flex flex-col lg:flex-row">
                    <div class="text-primary divider lg:divider-horizontal "></div>
                </div>
                <div class="card-body w-110 m-0 lg:card-body w-36 ">
                    <h2 class="card-title font-bold text-justify text-md ">How to Pay Your Premium</h2>
                    <h6 className='text-justify text-sm'>Learn about the available online channels of Fareast Premium Payment and how to pay through each channel.</h6>
                    <div class="justify-left mt-2">
                        <button class="bg-gradient-to-r  from-cyan-500 to-blue-500 btn btn-success  hover:to-success-500 rounded w-32 text-white  font-bold">LEARN MORE</button>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default Banner;