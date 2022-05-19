import React from 'react';
import { Link } from 'react-router-dom';
import bkash from '../../assets/icon/bkash.jpg';
import nagad from '../../assets/icon/nagad.jpg';
import Rocket from '../../assets/icon/rocket.jpg';

const Pay_Channel = () => {
    return (

        <div>
            <h1 className='text-2xl font-bold text-info mt-5 mb-5 drop-shadow-sm'>Please Select Payment Channel</h1>


            <div className='flex justify-center'>
                <div class="card w-full max-w-md bg-base-100 shadow-xl bordered">
                    <div class="card-body">

                        <div class="form-control">
                            <label class="label cursor-pointer w-full">
                                <span class="label-text drop-shadow-sm font-bold" >Online Payment through BKash/Rocket/Nagad </span>
                                <input type="radio" name="radio-6" class="radio checked:bg-green-500" checked />
                            </label>
                        </div>
                        <div className='justify-center lg:flex'>
                            <div class="flex justify-center p-1 card w-38  bg-base-100 shadow-lg rounded bordered">
                                <img className=' w-28 h-12' src={bkash} alt="Bkash" />
                            </div>
                            <div class="flex justify-center p-1 ml-2 card w-38  bg-base-100 shadow-lg rounded bordered">
                                <img className=' lg:w-28 h-12' src={nagad} alt="Nagad" />
                            </div>
                            <div class="flex justify-center p-1 ml-2 card w-38  bg-base-100 shadow-lg rounded bordered">
                                <img className=' lg:w-28 h-12' src={Rocket} alt="Rocket" />
                            </div>

                        </div>

                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text drop-shadow-sm font-bold">Online Payment through Cards</span>
                                <input type="radio" name="radio-6" class="radio checked:bg-blue-500" />
                            </label>
                        </div>


                        <div class="card-actions justify-center mt-5">
                            <button class="bg-gradient-to-r  from-cyan-500 to-blue-500 btn btn-success btn-sm  hover:to-success-500 rounded w-32 text-white  font-bold"><Link to='/policy_details'>SUBMIT </Link></button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Pay_Channel;