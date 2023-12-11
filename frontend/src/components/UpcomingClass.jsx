import React from 'react';

const UpcomingClasses = ({ n_classes }) => {
    // Assuming you have a function to fetch class data from the backend
    // This function should ideally be called in a useEffect hook or similar
    // const classesInfo = fetchClassesInfo(n_classes);

    const dummyClasses = [
        { time: '10:30', name: 'Designing and Using Databases', absences: '0/3' },
        { time: '12:00', name: 'Calculus', absences: '2/3' },
        { time: '1:30', name: 'Computer Programming', absences: '1/3' }
        // Replace this with actual data fetching logic
    ];

    return (
        <ul>
            {dummyClasses.map((classItem, index) => (
                // className="flex flex-col mx-auto items-start p-4 bg-gray-800 border border-gray-300 shadow-xl mb-4 w-2/3 rounded-3xl"
                <li key={index} className="flex flex-col mx-auto items-start p-4 bg-gray-800 border border-gray-300 shadow-xl mb-4 w-[75%] rounded-3xl">
                    <span className="mt-4 text-3xl text-white font-mono">{classItem.time} - {classItem.name}</span>
                    <span className='mt-4 ml-auto text-3xl text-white font-mono'> Absences : {classItem.absences}</span>
                </li>
            ))}
        </ul>
    );
};

export default UpcomingClasses;

