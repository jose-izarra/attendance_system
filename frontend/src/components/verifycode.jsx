import React, { useState } from 'react';
import { verifyCode } from '../api'; // Adjust the import path based on your project structure

const VerifyCodeForm = () => {
    const [formData, setFormData] = useState({
        studentInput: '',
        email: '', // Add the email input
        courseCode: '' // Add the courseCode input
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
            const response = await verifyCode(
                formData.studentInput,
                formData.email, // Pass the email value
                formData.courseCode // Pass the courseCode value
            );
            console.log('Verification Response:', response);

            if (response.body && response.body.successful) {
                setSubmitStatus('Verification Successful!');
            } else {
                setSubmitStatus('Verification Failed');
            }
            // Additional handling if needed
        } catch (error) {
            console.error('Verification Failed:', error);
            setSubmitStatus(`Verification Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center py-5">
            <h2 className="text-white font-bold p-6 text-2xl font-mono">Verify Code: </h2>
            <input
                type="text"
                name="studentInput"
                placeholder="Enter Code"
                value={formData.studentInput}
                onChange={handleChange}
                className="h-[50px] p-2 pl-4 border-gray-300 rounded-[2rem] text-gray-500 text-2xl mb-4"
            />
            <input
                type="text"
                name="email"
                placeholder="Enter Email" // Add the email input
                value={formData.email} // Add the email value
                onChange={handleChange} // Add the email change handler
                className="h-[50px] p-2 pl-4 border-gray-300 rounded-[2rem] text-gray-500 text-2xl mb-4"
            />
            <input
                type="text"
                name="courseCode"
                placeholder="Enter Course Code" // Add the courseCode input
                value={formData.courseCode} // Add the courseCode value
                onChange={handleChange} // Add the courseCode change handler
                className="h-[50px] p-2 pl-4 border-gray-300 rounded-[2rem] text-gray-500 text-2xl mb-4"
            />
            <button type="submit" className="bg-blue-500 px-5 mx-5 text-white rounded-[1.5rem] h-[60px] text-2xl">Check Attendance</button>
            {submitStatus && <p className='text-white p-5'>{submitStatus}</p>}
        </form>
    );
};

export default VerifyCodeForm;
