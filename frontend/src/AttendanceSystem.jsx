// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assuming NavBar is a React component
import ClassCard from './components/ClassCard'; // Assuming ClassCard is a React component
import UpcomingClass from './components/UpcomingClass'; // Assuming UpcomingClass is a React component
import './App.css';
import SignUpForm from './components/signUpForm';
import LoginForm from "./components/loginForm";
import VerifyCodeForm from "./components/verifycode";

// Define the component
const AttendanceSystem = () => {
    return (
        <main className='text-white text-sm'>
            <NavBar />

            {/* Active Classes Section */}

            <section style={styles.section}>
                <h1 style={styles.h1} className='py-5'>Hello Student</h1>
                <p className='text-black text-lg'>Check your attendance below</p>
                <h3 className='text-black text-lg'>Active Class:</h3>

                <ClassCard active={true} name="<<Class Name>>" body="Hello world" />
            </section>

            {/* Upcoming Classes Section */}
            <section style={styles.section} >
                <h3 className="text-white">Upcoming Classes:</h3>
                <UpcomingClass n_classes={4} />

            </section >
                <div className="flex mb-4 p-4">
                    {/* SignUpForm Component */}
                    
                    <SignUpForm className="mr-4 p-4 rounded-lg" />

                    {/* LoginForm Component */}
                    <LoginForm className="mr-4 p-4 rounded-lg" />

                    {/* VerifyCodeForm Component */}
                    <VerifyCodeForm className="p-4 rounded-lg" />
                </div>


            <section style={styles.section} >
                <h2><Link to="/prof">Go to Professor page</Link></h2>
            </section>
        </main>
    );
};


// ml-[10rem] pl-[5rem] pb-[2rem] w-[70%]
// Define inline styles
const styles = {
    main: {
        color: 'rgb(0, 0, 0)',
        fontSize: '20px',
        lineHeight: 1.6,
    },
    section: {
        marginLeft: '10rem',
        paddingLeft: '5rem',
        paddingBottom: '2rem',
        width: '100%',
    },
    h1: {
        color: 'rgb(0,0,0)',
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: 1,
    },

    // Add other styles as needed
    // Add other styles as needed
};

export default AttendanceSystem;
