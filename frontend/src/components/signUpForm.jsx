import React, { useState } from 'react';
import { signUp } from '../api';

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(<span className="text-white">Submitting...</span>);
        try {
            const response = await signUp(formData);
            console.log('Sign Up Successful:', response);
            setSubmitStatus(<span className='text-black'>Sign Up Successful!</span>);
            // Additional handling (e.g., redirecting the user)
        } catch (error) {
            console.error('Sign Up Failed:', error);
            setSubmitStatus(<span className='text-black'>{`Sign Up Failed: ${error.message}`}</span>);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start mr-10 max-w-xl w-full bg-gray-800 border border-gray-300 p-8 rounded-2xl mt-10 shadow-2xl">
            <h2 className="text-white mb-6 text-3xl">Sign Up</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="mb-4 p-4 border border-gray-300 rounded text-black w-full text-xl"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-4 p-4 border border-gray-300 rounded text-black w-full text-xl"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mb-4 p-4 border border-gray-300 rounded text-black w-full text-xl"
            />
            <br />
            <div className="flex justify-between items-center mb-4 w-full">
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

                <button type="submit" className="bg-blue-500 text-white py-4 px-6 rounded ml-auto text-xl">
                    Sign Up
                </button>
            </div>

            {submitStatus && <p className='text-white'>{submitStatus}</p>}
        </form>
    );

};

export default SignUpForm;
