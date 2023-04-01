import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route

}
  from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const [progress, setProgress] = useState(0)


  return (
    <>
      <Router>
        <LoadingBar
          height={4}
          color='#f11946'
          progress={progress}

        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="home" country='in' category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country='in' category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country='in' category='entertainment' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" country='in' category='general' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country='in' category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country='in' category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country='in' category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country='in' category='technology' />} />

        </Routes>
      </Router>
    </>
  );
}

