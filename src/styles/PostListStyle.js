import styled from "styled-components";

const PostListStyle = styled.div`
  width: 75%;
  height: 100%;
  padding: 35px 0;
  ul {
    display: flex;
    max-width:100%;
    overflow-x:scroll;
    list-style: none;
    justify-content: space-between;
    #posts {
      height: 210px;
      width: 200px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content:space-evenly;
      margin:4px;
      border:1px solid;
      flex-direction: column;
      padding: 20px;
      img {
        width: 100%;
      }
      @media (max-width: 375px) {
        width:150px;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export { PostListStyle };
