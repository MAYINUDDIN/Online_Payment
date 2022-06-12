import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import nagad from '../../assets/icon/nagad.jpg';
const PaymentOverview = () => {
    const { id, name, amout } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details);
    console.log(id, name, amout);




    return (

        <div>
            <h4 className='mb-2 sm:text-sm lg:text-xl font-bold text-dark mt-3  uppercase  drop-shadow-sm'>Confirm Your Payment Selection</h4>

            <div className='flex justify-center'>
                <div class="card w-full max-w-4xl  shadow-xl rounded ">
                    <div class="card-body">


                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            <div class="">
                                <h2 className='text-dark font-bold text-md text-left '>Payment Gateway :
                                </h2>
                                <img className=' w-24 h-12' src={nagad} alt="Bkash" />
                            </div>
                            <div class="mt-1">
                                <h3 className='text-dark text-sm  p-0 font-bold  rounded  text-left'>PROPOSER             :   {name} </h3>
                                <h3 className='text-dark text-sm  p-0 font-bold rounded  text-left'>POLICY NUMBER       : {id} </h3>
                            </div>
                        </div>



                        <h3 className='text-white text-center p-2 font-bold drop-shadow rounded bg-[#087f23]'>PAYMENT SUMMARY </h3>

                        {/* 
                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>NAME       :{name} <span className='ml-20'>POLICY NUMBER: {id}</span> </h3>

 */}
                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>PREMIUM AMOUNT DUE        : <span className='ml-20'>{amout}</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded  text-left'>PAYMENT GATEWAY USAGE FEE : <span className='ml-9'>0</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>TOTAL        : <span className='ml-52'>{amout}</span> </h3>

                    </div>
                </div>

            </div>

            <button className='btn btn-success btn-md mt-5 text-white px-8  rounded bg-[#087f23]'>PROCESS TO PAY</button>
        </div>
    );
};

export default PaymentOverview;