import React from 'react';

// Define the component with props
const ClassCard = ({ name, active }) => {
    const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

    return (
        active ?
            <a href="#" className="w-[80%] my-2">
                <div className="h-fit w-[70%] bg-slate-100 shadow-xl rounded-xl p-7">
                    <h2 className="text-center py-5" style={styles.h2}>{name}</h2>
                    <p className="text-center text-lg">Click to scan or input code</p>
                </div>
            </a>
            :
            <a>
                <div className="h-fit w-[80%] bg-slate-100 shadow-xl rounded-xl p-7">
                    <h2 className="text-center" style={styles.h2}>{randomNum}</h2>
                    <p className="text-center">Please Check in!</p>
                </div>
            </a>
    );
};

// Define inline styles
const styles = {
    h2: {
        fontSize: '40px',
    },
};

export default ClassCard;
