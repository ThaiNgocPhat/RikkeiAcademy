import React from 'react'

export default function InputJobs({addJobs}) {
  return (
    <>
      <div id="input-container">
        <h1>List work</h1>
        <form onSubmit={addJobs} className="job-form">
          <input
            type="text"
            className="job-input"
            placeholder="Enter Job"
            autoFocus
          />
          <button type="submit" className="job-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
