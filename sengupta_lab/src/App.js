import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import About from './components/About';
import Career from './components/Career';
import Home from './components/Home';
import JobListing from './components/JobListing';
import JobDetails from './components/JobDetails';
import Application from './components/Application';
import Error from './components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/jobList" element={<JobListing />} />
          <Route path="/jobList/:id" element={<JobDetails />} />
          <Route path="/apply" element={<Application />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
