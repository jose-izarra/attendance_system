import React, { useState } from 'react';
import { addNewCourse } from '../api';

const AddCourseForm = () => {
    const [formData, setFormData] = useState({
        course_code: '',
        course_name: '',
        prof_email: ''
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
        setSubmitStatus('Adding New Course...');
        try {
            const response = await addNewCourse(formData);
            console.log('Course Added Successfully:', response);
            setSubmitStatus('Course Added Successfully!');
        } catch (error) {
            console.error('Adding Course Failed:', error);
            setSubmitStatus(`Adding Course Failed: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start mr-10 max-w-xl w-full bg-gray-800 border border-gray-300 p-8 rounded-2xl mt-10 shadow-2xl">
            <h2 className='text-white mb-6 text-3xl'> Add New Course</h2>
            <input
                type="text"
                name="course_code"
                placeholder="Course Code"
                value={formData.course_code}
                onChange={handleChange}
                className="mb-6 p-4 border border-gray-300 rounded w-full text-black text-2xl"
            />
            <input
                type="text"
                name="course_name"
                placeholder="Course Name"
                value={formData.course_name}
                onChange={handleChange}
                className="mb-6 p-4 border border-gray-300 rounded w-full text-black text-2xl"
            />
            <input
                type="email"
                name="prof_email"
                placeholder="Professor Email"
                value={formData.prof_email}
                onChange={handleChange}
                className="mb-6 p-4 border border-gray-300 rounded w-full text-black text-2xl"
            />
            <button type="submit" className="bg-blue-500  text-2xl text-white py-3 px-6 rounded w-full mt-6">
                Add Course
            </button>
            {submitStatus && <p className="mt-6">{submitStatus}</p>}
        </form>
    );
};

export default AddCourseForm;
