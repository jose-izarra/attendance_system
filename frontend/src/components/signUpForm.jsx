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
        setSubmitStatus(<span className="text-white">Submitting...</span>);
        try {
            const response = await signUp(formData);
            console.log('Sign Up Successful:', response);
            setSubmitStatus(<span className ='text-white'>Sign Up Sucessful!</span>);
            // Additional handling (e.g., redirecting the user)
        } catch (error) {
            console.error('Sign Up Failed:', error);
            setSubmitStatus(<span className ='text-white'>`Sign Up Failed: ${error.message}`</span>);
            // Additional error handling
        }
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col items-start mx-auto max-w-xs">
            <h2 className="text-black mb-4">Sign Up</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mb-2 p-2 border border-gray-300 rounded text-white"
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
                
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Sign Up
                </button>
            </div>
            
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default SignUpForm;