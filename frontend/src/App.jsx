import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AttendanceSystem from './AttendanceSystem';
import ProfPage from './prof';
import Log from './logging';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AttendanceSystem />} />
                <Route path="/dashboard" element={<AttendanceSystem />} />
                <Route path="/logging" element={<Log />} />
                <Route path="/prof" element={<ProfPage />} />
            </Routes>
        </Router>
    );
}

export default App;

