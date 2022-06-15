import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import nagad from '../../assets/icon/nagad.jpg';
const PaymentOverview = () => {
    const { id, name, amount } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details);
    console.log(id, name, amount);

    const amount_from = 'nagad'


    // const handleSend = event => {
    //     event.preventDefault();
    //     const tk = (event.target.tk.value);
    //     // console.log(id, name, amount, amount_from, tk);
    //     const addItem = { tk };
    //     const url = `https://api.fareastislamilife.com/web_api/api/policy/payment`;
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(addItem)

    //     })
    //         .then(Response => Response.json())
    //         .then(data => console.log(data));

    // }


    const handleSend = event => {
        event.preventDefault();
        const policy_no = (event.target.tk.value);
        // if (policy_no < 10) {

        //     setError('Policy Number no longer than 10 character')
        //     navigate('/');
        // } else {
        //     // navigate('/');
        // }

        console.log(policy_no);
        const addItem = { policy_no };
        // const url = ('https://api.fareastislamilife.com/web_api/api/policy/payment', { mode: 'cors' });
        // const url = 'https://api.fareastislamilife.com/nagadPG/index.php';
        const url = ('https://api.fareastislamilife.com/nagadPG/index.php', { mode: 'cors' });
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Access-Control-Allow-Origin': "http://localhost:3001",
            },
            body: JSON.stringify(addItem)

        })
            .then(Response => Response.json())
            .then(data => console.log(data));

    }


    return (

        <div>
            <h4 className='mb-2 sm:text-sm lg:text-xl font-bold text-dark mt-3  uppercase  drop-shadow-sm'>Confirm Your Payment Selection</h4>

            <div className='flex justify-center'>
                <div class="card w-full max-w-4xl  shadow-xl rounded ">
                    <div class="card-body">
                        <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                            <div class="">
                                <h2 className='text-dark font-bold text-md text-left '>Payment Gateway :
                                </h2>
                                <img className=' w-24 h-12' src={nagad} alt="Bkash" />
                            </div>
                            <div class="mt-1">
                                <h4 className='text-dark text-sm  p-0 font-bold  rounded font-bold  text-left'>PROPOSER             : <span c>{name}</span>   </h4>
                                <h4 className='text-dark text-sm  p-0 font-bold rounded font-bold  text-left'>POLICY NUMBER       : <span>{id}</span>  </h4>
                            </div>
                        </div>



                        <h3 className='text-white text-center p-2 font-bold drop-shadow rounded bg-[#087f23]'>PAYMENT SUMMARY </h3>

                        {/* 
                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>NAME       :{name} <span className='ml-20'>POLICY NUMBER: {id}</span> </h3>

 */}
                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>PREMIUM AMOUNT DUE : <span className='lg:ml-20'>{amount}</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded  text-left'>PAYMENT GATEWAY USAGE FEE : <span className='lg:ml-9'>0</span> </h3>

                        <h3 className='text-dark text-sm  p-2 font-bold drop-shadow rounded bg-[#e0f2f1] text-left'>TOTAL        : <span className='lg:ml-52'>{amount}</span> </h3>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='tk' type="number" placeholder='' value={amount} required />

                    </div>
                </div>

            </div>

            <div class="w-full max-w-lg  py-4">
                <form onSubmit={handleSend} class="bg-white shadow-xl card rounded bordered px-8 pt-2 pb-8 mb-1 p-5">
                    <div class="mb-4">
                        <label class="block text-left text-gray-700 text-sm  mb-2" for="username">
                            *This  fields are mandatory
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='tk' type="number" placeholder='' value={amount} required />
                    </div>

                    <button className='btn btn-success bg-[#087f23]  rounded btn-sm px-12 text-white font-bold'>Submit</button>


                </form>

            </div>


            {/* 
            <a href="#" onClick={handleSend}>
                Click me
            </a> */}
            <a href="https://api.fareastislamilife.com/nagadPG"><button className='btn btn-success btn-sm lg:btn-md mt-5 text-white px-8  rounded bg-[#087f23]'> PROCESS TO PAY </button></a>
        </div>
    );
};

export default PaymentOverview;