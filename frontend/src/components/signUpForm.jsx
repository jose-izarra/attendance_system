import React, { useState } from 'react';
import { signUp } from '../api'; // Import the signUp function

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        student: false
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');
        try {
            const response = await signUp(formData);
            console.log('Sign Up Successful:', response);
            setSubmitStatus('Sign Up Successful!');
            // Additional handling (e.g., redirecting the user)
        } catch (error) {
            console.error('Sign Up Failed:', error);
            setSubmitStatus(`Sign Up Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <label>
                Student:
                <input
                    type="checkbox"
                    name="student"
                    checked={formData.student}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Sign Up</button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default SignUpForm;