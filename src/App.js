import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Subjects from './pages/Subjects';
import Profile from './pages/Profile';
import CourseContent from './pages/CourseContent';

function App() {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableDevTools = (e) => {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableDevTools);
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableDevTools);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:teacherId" element={<CourseContent />} />
      </Routes>
    </Router>
  );
}
export default App;
  
