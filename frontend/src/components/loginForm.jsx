import React, { useState } from 'react';
import { login } from '../api'; // Import the login function

const LoginForm = () => {
    const [formData, setFormData] = useState({
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
        setSubmitStatus('Logging in...');
        try {
            const response = await login(formData);
            console.log('Login Successful:', response);
            setSubmitStatus('Login Successful!');
            // Additional handling (e.g., redirecting the user)
        } catch (error) {
            console.error('Login Failed:', error);
            setSubmitStatus(`Login Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Log In</button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default LoginForm;
