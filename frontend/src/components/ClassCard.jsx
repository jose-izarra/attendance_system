import React from 'react';

const ClassCard = ({ name, active }) => {
    const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

    return (
        <div className="flex flex-col items-center mx-auto">
            {active ?
                // < href="#" className="w-[100%] my-2">
                <div className="w-[75%] my-2 h-fit  bg-slate-100 shadow-xl rounded-xl p-7 mx-auto">
                    <h2 className="text-center py-5 text-4xl">{name}</h2>
                    <p className="text-center text-lg">Input Code Below</p>
                </div>
                :
                <div className="h-fit w-80 bg-slate-100 shadow-xl rounded-xl p-7 mx-auto">
                    <h2 className="text-center text-4xl">{randomNum}</h2>
                    <p className="text-center text-black">Please Check in!</p>
                </div> 
            }
        </div>
    );
};

export default ClassCard;