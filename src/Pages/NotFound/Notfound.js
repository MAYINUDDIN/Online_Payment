import React from 'react';
import img from '../../assets/img/notfound.jpg';

const Notfound = () => {
    return (

        <div className="row">
            <div className="col-md-8">
                <img className='w-100' src={img} alt="" />
            </div>
        </div>

    );
};

export default Notfound;