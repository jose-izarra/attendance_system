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
        <form onSubmit={handleSubmit} className="flex flex-col items-start mx-auto max-w-xs">
            <h2 className="text-white mb-4">Log In</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white mr-8"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white mr-8"
            />
            <div className="flex justify-between items-center mb-2 w-full">
                <div className="bg-white text-black p-2 rounded-md">
                    Student:
                    <input
                        type="checkbox"
                        name="student"
                        checked={formData.student}
                        onChange={handleChange}
                        className='ml-2'
                    />  
                </div>
                
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-7">
                    Log In
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
