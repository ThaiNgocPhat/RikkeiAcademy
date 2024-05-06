import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListJobs({
  listJob,
  handleCheck,
  handleDelete,
  count,
  handleEdit,
}) {
  return (
    <div id="list-jobs-container">
      <ul className="job-list">
        {listJob.length > 0 ? (
          listJob.map((job) => (
            <li
              key={job.id}
              className={job.isChecked ? "job-item completed" : "job-item"}
            >
              <input
                type="checkbox"
                checked={job.isChecked}
                onChange={() => handleCheck(job.id)}
              />
              <span className="job-name">{job.jobName}</span>
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => handleEdit(job.id)}
                className="edit-icon"
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(job.id)}
                className="delete-icon"
              />
            </li>
          ))
        ) : (
          <li>No jobs</li>
        )}
      </ul>
      <p>
        Work done: {count} / {listJob.length}
      </p>
    </div>
  );
}
