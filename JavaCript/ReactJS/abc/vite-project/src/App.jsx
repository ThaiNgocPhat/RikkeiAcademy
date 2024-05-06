import React, { useState, useEffect } from "react";
import ListJobs from "./components/ListJobs";
import InputJobs from "./components/InputJobs";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (storedJobs) {
      setJobs(storedJobs);
    }
  }, []);

  const addJobs = (event) => {
    event.preventDefault();
    const jobName = event.target[0].value;
    const newJob = {
      id: Math.floor(Math.random() * 1000),
      jobName: jobName,
      isChecked: false,
    };
    setJobs([...jobs, newJob]);
    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    alert("Add job successfully!");
    event.target.reset();
  };

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    alert("Are you sure you want to delete this job?");
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const handleCheck = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isChecked: !job.isChecked } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  let count = 0;
  for(let i in jobs){
    if(jobs[i].isChecked){
      count++;
    }
  }
  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id === id);
    const editJobname = prompt("Enter new job name" , jobs[index].jobName);
    jobs[index].jobName = editJobname;
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Edit job successfully!");
  }
  return (
    <div>
      <InputJobs addJobs={addJobs} />
      <ListJobs
        listJob={jobs}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        count = {count}
        handleEdit = {handleEdit}
      />
    </div>
  );
}

export default App;
