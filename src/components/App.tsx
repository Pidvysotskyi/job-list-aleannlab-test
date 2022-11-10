import React, { useEffect, useState } from "react";
import JobList from "../pages/JobList";
import DetailedJob from "../pages/DetailedJob";
import getJobList from "../utils/API";
import { Routes, Route } from "react-router-dom";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (jobs.length !== 0) {
      return;
    }
    getJobList().then(data => {
      setJobs(data);
    });
  }, [jobs]);

  return (
    <Routes>
      <Route
        index
        element={<JobList />}
      />
      <Route
        path='/:jobId'
        element={<DetailedJob />}
      />
    </Routes>
  );
}

export default App;
