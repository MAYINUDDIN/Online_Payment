import React, { useEffect, useState } from 'react';
import useStatement from '../hooks/useStatement';

const PolicyStatement = () => {

    const [da] = useStatement([]);

    console.log(da);


    const [relode, setRelode] = useState(false);
    const [statement, setStatement] = useState([]);

    // const handleStatement = event => {
    //     event.preventDefault();

    //     const pol_no = event.target.pol_no.value;
    //     console.log(pol_no)

    //     const url = `http://172.31.99.56/payment/pol_statement.php?POLICY_NO=${pol_no}&&DOB=01-JAN-79`;

    //     fetch(url)
    //         .then(Response => Response.json())
    //         .then(data => (data));

    // }
    const handleStatement = event => {
        event.preventDefault();

        const pol_no = event.target.pol_no.value;
        console.log(pol_no)

        const url = `http://172.31.99.56/payment/pol_statement.php?POLICY_NO=${pol_no}&&DOB=01-JAN-79`;

        fetch(url)
            .then(Response => Response.json())
            .then(data => setStatement(data));

    }

    return (
        <div className="div">
            <h1 className='text-center mt-5 uppercase'>Please Provide Policy Details </h1>

            <div className="flex justify-center ">
                <div class="w-full max-w-md  py-12">
                    <form onSubmit={handleStatement} class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 p-5">
                        <div class="mb-4">
                            <label class="block text-left text-gray-700 text-sm  mb-2" for="username">
                                *This  fields are mandatory
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='pol_no' id="pol_no" type="number" placeholder="Policy Number" required />
                        </div>

                        <button className='btn btn-success  rounded btn-sm px-12 text-white font-bold'>Submit</button>

                    </form>

                </div>



            </div>
        </div>


    );
};

export default PolicyStatement;