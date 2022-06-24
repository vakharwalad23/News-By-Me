import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  const pageSize = 15;
  const country = 'in';
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={2}
            loaderSpeed={300}
            color='#FFFFFF'
            progress={progress} />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country={country} category='General' />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category='Business' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category='Entertainment' />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category='General' />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category='Health' />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category='Science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category='Sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category='Technology' />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;