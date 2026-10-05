import { useState, useEffect } from 'react';

import React from 'react'
import Job_listing from './Job_listing'
import Spinner from './Spinner';


function JobListings({ isHome = false }) {
  //const jobListsings = isHome ? jobs.slice(0,3) : jobs ;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?limit=3' : '/api/jobs';
      try { 
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetching data:", error);
      } finally { 
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {jobs.map((job) => (
              <Job_listing key={job.id} job={job} />
            ))}
          </div>
        )}


      </div>
    </section>
  );
}

export default JobListings