import React from 'react';

const ClassCard = ({ name, active }) => {
    const randomNum = Math.floor(100000 + Math.random() * 900000).toString();

    return (
        <div className="flex flex-col items-center mx-auto">
            {active ?
                <a href="#" className="w-2/3 my-2">
                    <div className="h-fit w-2/3 bg-slate-100 shadow-xl rounded-xl p-7 mx-auto">
                        <h2 className="text-center py-5 text-4xl">{name}</h2>
                        <p className="text-center text-lg">Input code</p>
                    </div>
                </a>
                :
                <a>
                    <div className="h-fit w-80 bg-slate-100 shadow-xl rounded-xl p-7 mx-auto">
                        <h2 className="text-center text-4xl">{randomNum}</h2>
                        <p className="text-center text-black">Please Check in!</p>
                    </div>
                </a>
            }
        </div>
    );
};

export default ClassCard;