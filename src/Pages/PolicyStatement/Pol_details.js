import React from 'react';

const Pol_details = ({ product }) => {
    const { POLICY_NO, PROPOSER, NEXTPREM } = product;
    return (
        <div>
            <h2>NAME: {PROPOSER}</h2>
            <h3>POL_NO: {POLICY_NO}</h3>
            <h3>NEXT PREM DATE: {NEXTPREM}</h3>
        </div>
    );
};

export default Pol_details;