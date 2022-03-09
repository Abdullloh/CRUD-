import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import images from "../images";
import { PostListStyle } from "../styles/PostListStyle";

export default function PostList() {
  const [data] = useFetch("/users");
  const navigate = useNavigate();

  return (
    <PostListStyle>
      <h1>Post List</h1>
      <ul>
        {data.map((users, i) => {
          const { id, name } = users;
          return (
            <li key={id} onClick={() => navigate(`/post-list/${id}`)}>
              <img src={images[i].img} alt="avatar" />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </PostListStyle>
  );
}
