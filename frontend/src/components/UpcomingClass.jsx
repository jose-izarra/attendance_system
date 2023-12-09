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
        <ul className="flex flex-col items-center" style={{ listStyleType: 'none'}}>
            {dummyClasses.map((classItem, index) => (
                <li key={index} className="flex items-center justify-between mb-0.75" style={styles.li}>
                    <span style={{ paddingRight: '0.75rem' }}>{classItem.time} -</span>
                    {classItem.name}
                    <span className='ml-auto' style={{paddingRight: '0.75rem' }}>
                        Absences : {classItem.absences}
                    </span>
                </li>
                
            ))}
        </ul>
    );
};

// Define inline styles
const styles = {
    li: {
        display: 'flex',

        alignItems: 'center',
        width: '80%',
        height: '2.5rem',
        borderRadius: '0.75rem',
        borderWidth: '1px',
        padding: '2rem 0 2rem 0.75rem',
        margin: '0.75rem',
        background: '#f8fafc', // bg-slate-100
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)', // shadow-md
    },

};

export default UpcomingClasses;
