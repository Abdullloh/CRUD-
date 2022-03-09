import React from "react";
import Axios from "../utils/axios";

export default function AddPost() {
  const setData = async(e) =>{
    e.preventDefault();
    try {
      const res = Axios.post('/posts/',{
        title: "Post Title",
        body: "Post Body",
        mansur:1
      })
    } catch (error) {
      
    }
  }
  return <div>
    <form onSubmit={setData}>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Content" />
      <button type="submit">Add Post</button>
    </form>
  </div>;
}
