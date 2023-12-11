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
        <form onSubmit={handleSubmit} className="flex items-center py-5">
            <h2 className="text-white font-bold p-6 text-2xl font-mono">Verify Code: </h2>
            <input
                type="text"
                name="studentInput"
                placeholder="Enter Code"
                value={formData.studentInput}
                onChange={handleChange}

                className="h-[50px] p-2 pl-4 border-gray-300 rounded-[2rem] text-gray-500 text-2xl"

            />
            <button type="submit" className="bg-blue-500 px-5  mx-5 text-white rounded-[1.5rem]  h-[60px] text-2xl">Check Attendance</button>
            {submitStatus && <p className='text-white p-5'>{submitStatus}</p>}
        </form>
    );
};

export default VerifyCodeForm;
