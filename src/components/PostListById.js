import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import Axios from "../utils/axios";
import Form from "./Form";

export default function PostListById() {
  const params = useParams();
  const [data] = useFetch("/posts/");
  const [postId, setPostId] = useState();
  const [comments] = useFetch(`/comments/`);
  const filteredPost = data.filter((post) => post.userId == params.id);
  const filteredComments = comments.filter((comment) => comment.postId == postId);
  const [see,setSee] = useState(false);
  return (
    <div>
      PostListById {params.id}
      <ul>
        {filteredPost.map((posts) => {
          const { id, title, body } = posts;
          return (
            <>
            <li key={id} onClick={() => setPostId(id)}>
              {title}
            {filteredComments.map((comments) =>{
              return(
                <>
                <p key={comments.id}>{comments.name}</p>
                <button onClick={()=> setSee(!see)}>Add</button>
                <Form open={see} no={setSee}/>
                </>
              )
            })}
              {body}
            </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
