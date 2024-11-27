import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentSignup from './StudentSignup';
import InstructorSignup from './InstructorSignup';
import Login from './Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/studentsignup" element={<StudentSignup />} />
                <Route path="/instructorsignup" element={<InstructorSignup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
