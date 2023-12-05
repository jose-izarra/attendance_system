import React from 'react';
import NavBar from './components/NavBar'; // Adjust the path as needed
import ClassCard from './components/ClassCard'; // Adjust the path as needed
import './App.css';

const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

const profPage = () => {
    return (
        <main>
            <NavBar />
            <section>
                <h1>Hello Professor</h1>
                <p>Code for this lesson: {randomNum}</p>
                <ClassCard active={false} name="<<Class Name>>" body="Hello world" />
            </section>
        </main>
    );
}

export default profPage;
