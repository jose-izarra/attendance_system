import React from 'react';
import NavBar from './components/NavBar'; // Adjust the path as needed
import ClassCard from './components/ClassCard'; // Adjust the path as needed

const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

const profPage = () => {
    return (
        <main>
            <NavBar />
            <section className="h-48 flex flex-col text-left pt-10">
                <h1 className="text-2xl font-bold text-left pb-3">Hello Professor</h1>
                <p className="text-left">Code for this lesson: {randomNum}</p>
                <ClassCard active={false} name="<<Class Name>>" body="Hello world" />
            </section>
        </main>
    );
}

export default profPage();
