import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assuming NavBar is a React component
import ClassCard from './components/ClassCard'; // Assuming ClassCard is a React component
import UpcomingClass from './components/UpcomingClass'; // Assuming UpcomingClass is a React component
import './App.css';

// Define the component
const AttendanceSystem = () => {
    return (
        <main style={styles.main}>
            <NavBar />

            {/* Active Classes Section */}
            <section style={styles.section}>
                <h1 style={styles.h1}>Hello Student</h1>
                <p>Check your attendance below</p>
                <h3>Active Class:</h3>
                <ClassCard active={true} name="<<Class Name>>" body="Hello world" />
            </section>

            {/* Upcoming Classes Section */}
            <section style={styles.section}>
                <h3>Upcoming Classes:</h3>
                <UpcomingClass n_classes={4} />
            </section>

            <section style={styles.section}>
                <h2><Link to="/prof">Go to Professor page</Link></h2>
            </section>
        </main>
    );
};

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
        blockSize: 'fit-content',
    },
    h1: {
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: 1,
    },
    // Add other styles as needed
};

export default AttendanceSystem;
