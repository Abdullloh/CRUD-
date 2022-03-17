import styled from "styled-components";

const PostById = styled.div`
max-width:100%;
  padding: 35px 10px;
  ul {
    flex-direction:column;
    list-style: none;
    #postById {
      border: 2px solid rgb(104 60 184);
      margin: 10px 0;
      cursor: pointer;
      max-width:100%;
      padding: 10px 5px;
      border-radius: 8px;
      & > .active {
        color: green;
        span {
          border: 2px solid rgb(104 60 184);
        }
      }
    }
  }
`;

export { PostById };
