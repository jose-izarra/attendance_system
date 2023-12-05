import React, { useState } from 'react';
import { sendCode } from '../api'; // Adjust the import path to your API functions

const CodeGenerator = () => {
    const [courseCode, setCourseCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await sendCode(courseCode);
            if (response.status === 200 && response.body) {
                setGeneratedCode(response.body.code); // Assuming the response has a 'code' field
            } else {
                setError('Failed to fetch the generated code');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    placeholder="Enter Course Code"
                />
                <button type="submit">Get Code</button>
            </form>
            {generatedCode && <p>Generated Code: {generatedCode}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default CodeGenerator;
