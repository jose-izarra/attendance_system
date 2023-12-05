import React, { useState, useEffect } from 'react';
import { sendCode } from '../api'; // Ensure this is the correct path

const CodeDisplay = () => {
    const [code, setCode] = useState(null); // Initialize as null to differentiate from an empty code
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const response = await sendCode();
                console.log("Response from API:", response);

                if (response && response.code !== undefined) {
                    setCode(response.code);
                } else {
                    console.error("Invalid response:", response);
                    setError('No code received');
                }
            } catch (err) {
                console.error("Error fetching code:", err);
                setError(err.message);
            }
        };

        fetchCode();
    }, []);

    return (
        <div>
            {code !== null ? (
                <p>Code: {code}</p>
            ) : (
                <p>Loading...</p>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default CodeDisplay;
