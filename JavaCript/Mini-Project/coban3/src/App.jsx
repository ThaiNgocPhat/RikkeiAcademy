import React from "react";
import axios from "axios";


const getNameById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/content/${id}`);
    if (res.data && res.data.name) {
      return res.data.name;
    } else {
      throw new Error("Invalid response format: missing 'name' property");
    }
  } catch (error) {
    console.error("Error fetching name by ID:", error);
    throw error; 
  }
};
const deletePostById = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/delete/${id}`);
    if (res.status === 204) {
      return true;
    } else {
      throw new Error("Delete request failed");
    }
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    throw error; 
  }
};

export default function App() {
  return <> 
  </>;
}
