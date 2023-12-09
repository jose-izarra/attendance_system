import React, { useState } from 'react';
import { verifyCode } from '../api'; // Adjust the import path based on your project structure

const VerifyCodeForm = () => {
    const [formData, setFormData] = useState({
        studentInput: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Verifying...');
        try {
            const response = await verifyCode(formData.studentInput);
            console.log('Verification Successful:', response);
            setSubmitStatus('Verification Successful!');
            // Additional handling if needed
        } catch (error) {
            console.error('Verification Failed:', error);
            setSubmitStatus(`Verification Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start mx-auto max-w-xs">
            <h2 className="text-black mb-4">Verify Code</h2>
            <input
                type="text"
                name="studentInput"
                placeholder="Enter Code"
                value={formData.studentInput}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded ml-auto">Verify Code</button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default VerifyCodeForm;
