import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import WebSite from './Pages/WebSite';
import HomePage from './Pages/HomePageCompoent/HomePage';
import JobListingPage from './Pages/JobListingPage';
import NavBar from './Pages/HomePageCompoent/NavBar'; // ⬅️ Make sure this path is correct

function App() {
  return (
    <Router>
      <NavBar /> {/* ✅ Always visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<WebSite />} />
        <Route path="/job" element={<JobListingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
