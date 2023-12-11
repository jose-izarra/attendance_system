import React, { useState } from 'react';
import { sendCode } from '../api';

const CodeGenerator = () => {
    const [courseCode, setCourseCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await sendCode(courseCode);
            if (response.status === 200 && response.body) {
                setGeneratedCode(response.body.code);
            } else {
                setError('Failed to fetch the generated code');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-start mr-10 max-w-xl w-full bg-gray-800 border border-gray-300 p-8 rounded-2xl mt-10 shadow-2xl">
            <h2 className='text-white mb-6 text-3xl'> Class Login </h2>
            <form onSubmit={handleSubmit} className="">
                <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    placeholder="Enter Course Code"
                    className="p-4 border border-gray-300 rounded text-black text-2xl"
                />
            </form>
            <button type="submit" className="bg-blue-500 text-2xl text-white py-4 px-6 rounded mt-6 mr-auto">
                Get Code
            </button>
            {generatedCode && <p className="mt-6 text-lg">Generated Code: {generatedCode}</p>}
            {error && <p className="mt-6 text-red-500">Error: {error}</p>}
        </div>
    );
};

export default CodeGenerator;

