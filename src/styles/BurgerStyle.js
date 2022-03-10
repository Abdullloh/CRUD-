import styled from "styled-components";

const BurgerStyle = styled.div`
cursor:pointer ;
z-index:1 ;
  span {
    width: 32px;
    height: 4px;
    display: block;
    position: absolute;
    left: 12px;
    top: 16px;
    background: black;
  }
    span:nth-child(1) {
        top:22px ;
    }
    span:nth-child(2) {
        top:28px ;
    }
`;

export { BurgerStyle };
