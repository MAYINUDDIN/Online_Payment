import React from 'react';
import { Link } from 'react-router-dom';
import bkash from '../../assets/icon/bkash.jpg';
import nagad from '../../assets/icon/nagad.jpg';
import Rocket from '../../assets/icon/rocket.jpg';

const Pol_details = ({ product }) => {
    const { policy_no, policy_status, proposer, amount } = product;
    return (
        <div>
            <h4 className='mb-2 text-xl font-bold text-dark  uppercase  drop-shadow-sm'>Your Policy Details</h4>

            <div className='flex justify-center'>
                <div class="card bg-[#087f23] w-full max-w-lg  shadow-xl rounded ">
                    <div class="card-body">
                        <h2 className='text-white font-bold text-md text-left '>PROPOSER : {
                            proposer ? proposer : 'Please Type Valid Policy Number'
                        }</h2>

                        <h3 className='text-white text-left'>POLICY_NO : {
                            policy_no ? policy_no : 'Please Type Valid Policy Number'
                        }</h3>


                        <h3 className='text-white text-left'>POLICY STATUS : {policy_status} </h3>
                        {/* <h3 className='text-white text-left'>PAYMENT DUE TYPE : {NEXTPREM}</h3> */}
                        <h3 className='text-white font-bold text-left'>*PAYABLE AMOUNT : {amount}</h3>

                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-2'>
                <div class="card w-full max-w-lg bg-[#087f23]  shadow-xl rounded bordered">
                    <div class="card-body h-20 mb-5">

                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text text-white drop-shadow-sm text-lg font-bold">*Select Payable Amount : {amount}</span>
                                <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                            </label>
                        </div>


                    </div>
                </div>
            </div>

            <div>
                <h4 className='mb-2 text-xl font-bold text-dark mt-2  drop-shadow-sm uppercase'>Please Select Payment Gateway</h4>

                <div className='flex justify-center'>
                    <div class="card w-full max-w-lg bg-base-100 shadow-xl rounded bordered">
                        <div class="card-body ">
                            <div className='justify-center lg:flex'>
                                <div class="flex justify-center p-3 m-1 card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <img className=' w-28 h-20' src={bkash} alt="Bkash" />
                                </div>
                                <div class="flex justify-center p-3 m-1  card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <Link to={`/payment_overview=${policy_no}=${proposer}=${amount}`}> <img className=' lg:w-28 h-20' src={nagad} alt="Nagad" /></Link>
                                </div>
                                <div class="flex justify-center p-3 m-1 card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <img className=' lg:w-28 h-20' src={Rocket} alt="Rocket" />
                                </div>
                            </div>
                            {/* <div>
                                <button class="btn btn-sm rounded text-white bg-[#087f23] px-10 mt-3 btn-success"> SUBMIT </button>

                            </div> */}

                        </div>
                    </div>

                </div>


            </div>
        </div >
    );
};

export default Pol_details;