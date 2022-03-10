import styled from "styled-components";

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100vw;
  left: 0;
  background: #000000b8;
  display: flex;
  z-index: 1024;
  align-items: center;
  justify-content: center;
  form {
    background: #fff;
    flex-direction: column;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    border-radius: 4px;
    input,
    textarea {
      width: 50%;
      height: 42px;
      border-radius: 8px;
      border: 1px solid;
      margin: 8px 0;
      outline: none;
      padding: 10px;
      @media (max-width: 768px) {
          width: 90%;
      }
    }
    span {
      position: absolute;
      right: 10px;
      cursor: pointer;
      top: 0;
    }
    button {
      width: 50%;
    }
    @media (max-width: 768px) {
        width:90% ;
    }
  }
`;
export { FormContainer };
