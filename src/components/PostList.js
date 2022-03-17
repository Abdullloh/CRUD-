import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import images from "../images";
import { PostListStyle } from "../styles/PostListStyle";
import PostListById from "./PostListById";

export default function PostList() {
  const [data, loading] = useFetch("/users");
  const [userId,setUserId] = useState()
  const navigate = useNavigate();

  return (
    <>
    <PostListStyle>
      <h1>User List</h1>
      {loading ? <p>Loading ...</p> : ""}
      <ul>
        {data.map((users, i) => {
          const { id, name } = users;
          return (
            <li id="posts" key={id} onClick={() => setUserId(id)}>
              <img src={images[i].img} alt="avatar" />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
      <PostListById userId={userId}/>
    </PostListStyle>
      </>
  );
}
