import React, { useState } from "react";
import ListJobs from "./components/ListJobs";
import InputJobs from "./components/InputJobs";

function App() {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  const addJobs = (event) => {
    event.preventDefault();
    const jobName = event.target[0].value;
    const newJob = {
      id: Math.floor(Math.random() * 1000),
      jobName: jobName,
      isChecked: false,
    };
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    alert("Add job successfully!");
    event.target.reset();
  };

  const handleDelete = (id) => {
    const jobName = jobs.find((job) => job.id === id);
    if (window.confirm(`Do you want to delete ${jobName.jobName}?`)) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      alert("Delete job successfully!");
    }
  };

  const handleCheck = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isChecked: !job.isChecked } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  let count = 0;
  for (let i in jobs) {
    if (jobs[i].isChecked) {
      count++;
    }
  }

  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    const editJobname = prompt("Enter new job name", jobs[index].jobName);
    if (editJobname !== null) {
      if (editJobname !== "") {
        jobs[index].jobName = editJobname;
        setJobs([...jobs]);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Edit job successfully!");
      } else {
        alert("Please enter a job name!");
      }
    }
  };


  return (
    <div>
      <InputJobs addJobs={addJobs} />
      <ListJobs
        listJob={jobs}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        count={count}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
