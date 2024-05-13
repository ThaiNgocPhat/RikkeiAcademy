import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
const About = [
  {
    id: 1,
    name: "About 1",
    description: "About 1 description"
  },
  {
    id: 2,
    name: "About 2",
    description: "About 2 description"
  },
  {
    id: 3,
    name: "About 3",
    description: "About 3 description"
  }
];
  const navigate = useNavigate();
  const handleDetailPage = (about) => {
    navigate(`/about/${about.id}`);
  }
  return (
    <>
     <h2 className="mb-4">About Page</h2>
     <ul>
      {About.map((about) => (
        <li key={about.id}>
          {about.name}
          <button onClick={() => handleDetailPage(about)}>Click Me !!!</button>
        </li>
      ))}
     </ul>
    </>
  )
};