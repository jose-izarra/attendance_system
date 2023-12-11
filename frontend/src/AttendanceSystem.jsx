// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assuming NavBar is a React component
import ClassCard from './components/ClassCard'; // Assuming ClassCard is a React component
import UpcomingClass from './components/UpcomingClass'; // Assuming UpcomingClass is a React component
import './App.css';
import SignUpForm from './components/signUpForm';
import LoginForm from "./components/loginForm";
import VerifyCodeForm from "./components/verifycode";
// import LogginPage from "./src/logging";


// Define the component
const AttendanceSystem = () => {
    return (
        <main className='text-black text-sm ml'>
            <NavBar />

            {/* Active Classes Section */}
            <section style={styles.main} className="flex flex-col items-start mx-auto max-w-xs">
                <div className="flex mb-8 p-4 ml-auto ">
                    {/* SignUpForm Component */}
                        
                    <SignUpForm className="mr-2 p-2 rounded-lg" />

                    {/* LoginForm Component */}
                    <LoginForm className="mr-2 p-2 rounded-lg" />


                    
                </div>
            </section>
            <section style={styles.section}>
                <h1 style={styles.h1} className='py-5'>Hello Student</h1>
                <p className='text-black text-lg'>Check your attendance below</p>
                <h3 className='text-black text-lg'>Active Class:</h3>
                <ClassCard active={true} name="<<Class Name>>" body="Hello world" />
            </section>

            
            {/* VerifyCodeForm Component */}
            <div className="flex flex-col items-start mx-auto max-w-xs">
                <VerifyCodeForm className="p-2 rounded-lg" />
            </div>

            {/* Upcoming Classes Section */}
            <section>
                <h3>Upcoming Classes:</h3>
                <UpcomingClass n_classes={4} />
            </section>
           
            <section>
                <div className="flex justify-center items-center">
                    <h2><Link to="/prof">Go to Professor page</Link></h2>
                </div>
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
        paddingright: '4rem',
    },
    section: {
        marginLeft: '10rem',
        paddingLeft: '5rem',
        paddingBottom: '2rem',
        width: '80%',

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
