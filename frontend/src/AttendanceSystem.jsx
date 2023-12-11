import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import ClassCard from './components/ClassCard';
import UpcomingClass from './components/UpcomingClass';
import VerifyCodeForm from './components/verifycode';

const AttendanceSystem = () => {
    return (
        <main className='text-black text-sm bg-gray-500'>
            <NavBar />

            <section className="">
                <h1 className='text-white py-5 text-4xl font-bold'>Hello Student </h1>
                <p className='text-white text-lg'>Check your attendance below</p>
            </section>
            
            <section>
                <ClassCard active={true} name="<< Class Name >>" />
                {/* VerifyCodeForm Component */}
                {/* className="flex flex-col items-start mx-auto max-w-xs py-4" */}
                {/* <div className=""> */}
                <VerifyCodeForm className="p-2 rounded-lg" />
                {/* </div> */}
            </section>

            {/* Upcoming Classes Section */}
            <section>
                <UpcomingClass n_classes={4}/>
            </section>

            
            {/* <div className="h-1 bg-gray-800 shadow-xl rounded-3xl w-fit p-5 m-5"> */}
            <h2 className="text-xl text-white p-5"><Link to="/prof" className='hover:text-blue-300'>Go to Professor page</Link></h2>
            {/* </div> */}
            
        </main>
    );
};



export default AttendanceSystem;
