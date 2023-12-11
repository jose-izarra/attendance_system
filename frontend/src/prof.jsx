import React from 'react';
import NavBar from './components/NavBar';
import ClassCard from './components/ClassCard';
import AddNewCourse from "./components/addNewCourse";
import CodeRetriever from "./components/codegetter";
import SignUpForm from "./components/signUpForm.jsx";
import LoginForm from "./components/loginForm.jsx";

const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

const ProfPage = () => {
    return (
        <main className='bg-gray-500 h-screen'>
            <NavBar />
            <section className="text-white p-8">
                <h1 className="text-4xl font-bold mb-4">Hello Professor</h1>
                <p>Actual Code for this lesson:</p>
                <div className="flex justify-center items-stretch">
                    {/* Code Retriever Component Component */}
                    <CodeRetriever className="flex-grow p-4 rounded-lg mr-2"/>

                    {/* Add New Course Component */}
                    <AddNewCourse className="flex-grow p-4 rounded-lg ml-2"/>
                </div>
            </section>
        </main>
    );
}

export default ProfPage;