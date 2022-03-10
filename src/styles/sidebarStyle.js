import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 25%;
  height: 100%;
  background: rgb(104 60 184);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  a {
    color: #fff;
    text-decoration: none;
    width: 100%;
    z-index: 1;
    padding: 10px;
  }
  a:hover {
    background: rgb(158 191 225);
    transition: 1s all ease;
  }
  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    text-align: center;
  }
`;

export { SidebarContainer };
