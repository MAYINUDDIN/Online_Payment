import React, { useEffect, useState } from 'react';

const useStatement = () => {
    const [statement, setStatement] = useState([]);

    useEffect(() => {
        fetch(`http://172.31.99.56/payment/pol_statement.php?POLICY_NO=9800000590&&DOB=01-JAN-79`)
            .then(Response => Response.json())
            .then(data => setStatement(data))

    }, [])

    return [statement, setStatement];
};

export default useStatement;