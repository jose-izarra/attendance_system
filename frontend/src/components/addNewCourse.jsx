import React, { useState } from 'react';
import { addNewCourse } from '../api'; // Import the addNewCourse function

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
            // Additional handling like clearing the form or redirecting the user
        } catch (error) {
            console.error('Adding Course Failed:', error);
            setSubmitStatus(`Adding Course Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="course_code"
                placeholder="Course Code"
                value={formData.course_code}
                onChange={handleChange}
            />
            <input
                type="text"
                name="course_name"
                placeholder="Course Name"
                value={formData.course_name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="prof_email"
                placeholder="Professor's Email"
                value={formData.prof_email}
                onChange={handleChange}
            />
            <button type="submit">Add Course</button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default AddCourseForm;