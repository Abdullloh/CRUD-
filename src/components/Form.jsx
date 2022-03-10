import React from "react";
import { StyledButton } from "../styles/AddPostStyle";
import { FormContainer } from "../styles/FormContainer";
import Axios from "../utils/axios";

export default function Form(props) {
  const { setOpen, open } = props;
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/comments/", { name: "nono" });
    } catch (error) {}
  };
  return (
    <FormContainer>
      <form action="">
        <div>
          <span onClick={handleClose}>x</span>
          <h2>Add Comment</h2>
        </div>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Email" type="text" />
        <textarea placeholder="Comment" type="text" />
        <StyledButton onClick={handleSubmit}>Add</StyledButton>
      </form>
    </FormContainer>
  );
}
