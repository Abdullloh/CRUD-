import React, { useState } from "react";
import { AddPostStyle, StyledButton } from "../styles/AddPostStyle";
import Axios from "../utils/axios";

export default function AddPost() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [succes, setSuccesMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post("/posts", state);
      if (res.status === 201) {
        setSuccesMsg(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <AddPostStyle>
      <h2>Add your post now !</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            onChange={handleInput}
            name="firstName"
            id="name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="email">Last Name</label>
          <input
            onChange={handleInput}
            name="email"
            id="email"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <input
            onChange={handleInput}
            name="text"
            id="text"
            type="text"
            placeholder="Text "
          />
        </div>
        {succes ? <p>Created succesfully</p> : null}
        {loading ? <p>Sending ...</p> : null}
        <StyledButton type="submit">Add Post</StyledButton>
      </form>
    </AddPostStyle>
  );
}
