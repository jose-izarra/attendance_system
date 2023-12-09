import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AttendanceSystem from './AttendanceSystem';
import ProfPage from './prof'; // Import your Professor page component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AttendanceSystem />} />
                <Route path="/prof" element={<ProfPage />} />
            </Routes>
        </Router>
    );
}

export default App;
