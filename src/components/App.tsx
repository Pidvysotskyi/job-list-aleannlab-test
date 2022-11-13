import React, { useEffect, useState } from "react";
import JobList from "../pages/JobList";
import DetailedJob from "../pages/DetailedJob";
import getJobList from "../utils/API";
import { Routes, Route } from "react-router-dom";

interface JobObject {
  address: String;
  id: String;
  name: String;
  benefits: Array<String>;
  createdAt: String;
  description: String;
  email: String;
  employment_type: Array<String>;
  location: { lat: number; long: number };
  phone: String;
  pictures: Array<String>;
  salary: String;
  title: String;
  updatedAt: String;
}

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

  console.log(jobs);

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
