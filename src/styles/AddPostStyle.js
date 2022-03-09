import styled from "styled-components";

const AddPostStyle = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 100%;
  form {
    width: 50%;
    div {
      display: flex;
      flex-direction: column;
      input {
        margin:4px 0;
        height: 42px;
        border: 1px solid #683cb8;
        border-radius: 8px;
        padding:0 8px;
        outline:none;
      }
    }
    @media (max-width:768px){
      width:80%;
    }
  }
  @media(max-width:768px){
    width:100%;
  }
`;

const StyledButton = styled.button`
    height: 50px;
    width: 100%;
    margin: 8px 0;
    border: none;
    border-radius: 16px;
    background: #683cb8;
    color: #fff;
    cursor:pointer;
`;

export { AddPostStyle ,StyledButton };
