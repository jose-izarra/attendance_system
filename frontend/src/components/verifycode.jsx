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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="studentInput"
                placeholder="Enter Code"
                value={formData.studentInput}
                onChange={handleChange}
            />
            <button type="submit">Verify Code</button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default VerifyCodeForm;
