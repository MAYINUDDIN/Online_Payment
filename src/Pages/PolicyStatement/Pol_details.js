import React from 'react';
import { Link } from 'react-router-dom';
import bkash from '../../assets/icon/bkash.jpg';
import nagad from '../../assets/icon/nagad.jpg';
import Rocket from '../../assets/icon/rocket.jpg';

const Pol_details = ({ product }) => {
    const { POLICY_NO, PROPOSER, NEXTPREM, INSTPREM } = product;
    return (
        <div>
            <h4 className='mb-2 text-xl font-bold text-info  drop-shadow-sm'>Your Policy Details</h4>

            <div className='flex justify-center'>
                <div class="card bg-success w-full max-w-lg  shadow-xl bordered ">
                    <div class="card-body">

                        <h2 className='text-white font-bold text-md text-left '>NAME    : {PROPOSER}</h2>
                        <h3 className='text-white text-left'>POLICY_NO : {
                            POLICY_NO ? POLICY_NO : 'Please Type Valid Policy Number'
                        }</h3>

                        <h3 className='text-white text-left'>PAYMENT TYPE : </h3>
                        <h3 className='text-white text-left'>PAYMENT DUE TYPE : {NEXTPREM}</h3>
                        <h3 className='text-white font-bold text-left'>*PAYABLE AMOUNT : {INSTPREM}</h3>
                    </div>
                </div>
            </div>

            <div>
                <h3 className=' font-bold  mt-2 mb-2 drop-shadow-sm '>Select Payment Gateway</h3>


                <div className='flex justify-center'>
                    <div class="card w-full max-w-lg bg-base-100 shadow-xl rounded bordered">
                        <div class="card-body">
                            <div className='justify-center lg:flex'>
                                <div class="flex justify-center p-3 card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <img className=' w-28 h-20' src={bkash} alt="Bkash" />
                                </div>
                                <div class="flex justify-center p-3 ml-2 card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <img className=' lg:w-28 h-20' src={nagad} alt="Nagad" />
                                </div>
                                <div class="flex justify-center p-3 ml-2 card w-38  bg-base-100 shadow-lg rounded bordered">
                                    <img className=' lg:w-28 h-20' src={Rocket} alt="Rocket" />
                                </div>

                            </div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Pol_details;