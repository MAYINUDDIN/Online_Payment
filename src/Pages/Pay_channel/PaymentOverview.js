import React from 'react';
import nagad from '../../assets/icon/nagad.jpg';
const PaymentOverview = () => {
    return (

        <div>
            <h4 className='mb-2 text-xl font-bold text-dark mt-3  uppercase  drop-shadow-sm'>Confirm Your Payment Selection</h4>

            <div className='flex justify-center'>
                <div class="card w-full max-w-4xl  shadow-xl rounded ">
                    <div class="card-body">
                        <h2 className='text-dark font-bold text-md text-left '>Payment Gateway :
                        </h2>
                        <img className=' w-24 h-12' src={nagad} alt="Bkash" />

                        <h3 className='text-white text-center p-2 font-bold drop-shadow rounded bg-[#087f23]'>PAYMENT SUMMARY </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>PREMIUM AMOUNT DUE        : <span className='ml-20'>0</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded  text-left'>PAYMENT GATEWAY USAGE FEE : <span className='ml-9'>0</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>TOTAL        : <span className='ml-52'>0</span> </h3>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentOverview;