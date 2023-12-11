import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Logging in...');
        try {
            const response = await login(formData);
            console.log('Login Successful:', response);
            setSubmitStatus('Login Successful!');

            // Redirect the user to the attendance system page
            if (formData.student) {
                navigate('/student'); // Replace '/dashboard' with the actual path you want to redirect to
            } else {
                navigate('/prof');
            }
            

        } catch (error) {
            console.error('Login Failed:', error);
            setSubmitStatus(`Login Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start ml-10 max-w-md w-full bg-gray-800 border border-gray-300 p-8 rounded-2xl mt-10  mr-70 shadow-2xl">
            <h2 className="text-white mb-6 text-3xl">Log In</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-6 p-4 border border-gray-300 rounded text-black w-full text-xl"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mb-6 p-4 border border-gray-300 rounded text-black w-full text-xl"
            />
            
            <div className="bg-white text-black p-4 rounded-md mr-4 text-xl">
                    Student:
                    <input
                        type="checkbox"
                        name="student"
                        checked={formData.student}
                        onChange={handleChange}
                        className='ml-2'
                    />
            </div>

            <div className="ml-auto">
                <br />
                <button type="submit" className="bg-blue-500 text-white py-4 px-6 rounded text-xl">
                    Log In
                </button>
            </div>
        </form>
    );

};

export default LoginForm;
