import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { PostById } from "../styles/PostById";
import Axios from "../utils/axios";
import Form from "./Form";
import { StyledButton } from "../styles/AddPostStyle";

export default function PostListById() {
  const params = useParams();
  const [data] = useFetch("/posts/");
  const [postId, setPostId] = useState();
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [comments] = useFetch(`/comments/`);
  const filteredPost = data.filter((post) => post.userId === +params.id);
  const filteredComments = comments.filter(
    (comment) => comment.postId === +postId
  );
  console.log(filteredComments);
  const handleClick = (id, i) => {
    console.log(id, i);
    setPostId(id);
    setIsActive(i);
    setVisible(!visible)

  };
  console.log(isActive);
  const [see, setSee] = useState(false);
  return (
    <PostById>
      PostListById {params.id}
      <ul>
        {filteredPost.map((posts, i) => {
          const { id, title, body } = posts;
          return (
            <>
              <li
                key={i}
                className={isActive === i ? "activce" : ""}
                onClick={() => handleClick(id, i)}
              >
               <span>
               {title}
                {body}
               </span>
                {isActive == i && visible
                  ? filteredComments.map((comments,i) => {
                    const {id,name,email} = comments 
                      return (
                        <>
                          <h4>{email}:</h4> <p key={id}>{name}</p>
                        </>
                      );
                    })
                  : ""
                  
                  }
                {isActive === i && visible ? <StyledButton onClick={(e)=> e.stopPropagation()} style={{width:'10%'}}>Add</StyledButton>:null}
              </li>
            </>
          );
        })}
      </ul>
    </PostById>
  );
}
