import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import ClassCard from './components/ClassCard';
import UpcomingClass from './components/UpcomingClass';
import VerifyCodeForm from './components/verifycode';

const AttendanceSystem = () => {
    return (
        <main className='text-black text-sm w-screen h-screen bg-gray-500 font-mono'>
            <NavBar />

            <section className="mx-auto ml-10">
                <h1 className='text-white py-5 text-4xl font-bold'>Hello Student :)</h1>
                <p className='text-white text-lg font-mono'>Check your attendance below</p>
            </section>
            <ClassCard active={true} name="<< Class Name >>" body="Hello world" />
            {/* VerifyCodeForm Component */}
            <div className="flex flex-col items-start mx-auto max-w-xs mb-6 mt-4">
                <VerifyCodeForm className="p-2 rounded-lg" />
            </div>

            {/* Upcoming Classes Section */}
            <section>
                <UpcomingClass n_classes={4}/>
            </section>

            <section>
                <div className="flex flex-col mx-auto items-center p-4 bg-gray-800 rounded-md shadow-xl mb-4 w-1/6 rounded-3xl mt-10">
                    <h2><Link to="/prof" className='text-white text-xl'>Go to Professor page</Link></h2>
                </div>
            </section>
        </main>
    );
};

export default AttendanceSystem;
