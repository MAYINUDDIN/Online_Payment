import React from 'react';

const Pol_details = ({ product }) => {
    const { POLICY_NO, PROPOSER, NEXTPREM } = product;
    return (
        <div>
            <h4 className='uppercase mb-2 text-xl font-bold text-info'>Policy Details</h4>

            <div className='flex justify-center'>
                <div class="card bg-success w-full max-w-md  shadow-2xl bordered ">
                    <div class="card-body">
                        <h2 className='text-white font-bold text-md '>NAME : {PROPOSER}</h2>
                        <h3 className='text-white'>POLICY_NO : {
                            POLICY_NO ? POLICY_NO : 'Please Type Valid Policy Number'
                        }</h3>
                        <h3 className='text-white'>NEXT PREM DATE : {NEXTPREM}</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pol_details;