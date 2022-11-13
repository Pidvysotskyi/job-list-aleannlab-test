import React, { useEffect, useState } from "react";
import JobList from "../pages/JobList";
import DetailedJob from "../pages/DetailedJob";
import getJobList from "../utils/API";
import { Routes, Route } from "react-router-dom";

interface JobObj {
  address: string;
  id: string;
  name: string;
  benefits: Array<string>;
  createdAt: string;
  description: string;
  email: string;
  employment_type: Array<string>;
  location: { lat: number; long: number };
  phone: string;
  pictures: Array<string>;
  salary: string;
  title: string;
  updatedAt: string;
  isFavorite: boolean;
}

function App() {
  const [jobs, setJobs] = useState<JobObj[]>([]);

  useEffect(() => {
    if (jobs.length !== 0) {
      return;
    }
    getJobList().then(data => {
      setJobs(data.map((job: {}) => ({ ...job, isFavorite: false })));
    });
  }, [jobs]);

  return (
    <Routes>
      <Route
        index
        element={<JobList jobsArray={jobs} />}
      />
      <Route
        path='/:jobId'
        element={<DetailedJob jobsArray={jobs} />}
      />
    </Routes>
  );
}

export default App;
