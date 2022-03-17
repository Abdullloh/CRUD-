import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { PostById } from "../styles/PostById";
import Axios from "../utils/axios";
import Form from "./Form";
import { StyledButton } from "../styles/AddPostStyle";

export default function PostListById({userId}) {
  const params = useParams();
  const [data] = useFetch("/posts/");
  const [comments] = useFetch(`/comments/`);
  const [postId, setPostId] = useState();
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const filteredPost = data.filter((post) => post.userId === +userId);
  const filteredComments = comments.filter(
    (comment) => comment.postId === +postId
  );
  console.log(filteredComments);
  const handleClick = (id, i) => {
    console.log(id, i);
    setPostId(id);
    setIsActive(i);
    setVisible(!visible);
  };
  const handleOpenBtn = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  console.log(open);
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
                id="postById"
                className={isActive === i ? "activce" : ""}
                onClick={() => handleClick(id, i)}
              >
                <span>
                  {title}
                  {body}
                </span>
                {isActive == i && visible
                  ? filteredComments.map((comments, i) => {
                      const { id, name, email } = comments;
                      return (
                        <>
                          <h4>{email}:</h4> <p key={id}>{name}</p>
                        </>
                      );
                    })
                  : ""}
                {isActive === i && visible ? (
                  <StyledButton
                    onClick={handleOpenBtn}
                    style={{ width: "150px" }}
                  >
                    Add Comment
                  </StyledButton>
                ) : null}
              </li>
            </>
          );
        })}
        {open ? <Form setOpen={setOpen} open={open} /> : ""}
      </ul>
    </PostById>
  );
}
