import styled from 'styled-components';

const PostListStyle = styled.div`
    width:75% ;
    height:100% ;
    padding:35px 0 ;
    ul{
        display:flex ;
        flex-wrap:wrap;
        list-style: none;
        justify-content:space-between ;
        li{
            height:210px ;
            width:200px ;
            cursor:pointer ;
            display:flex ;
            align-items:center ;
            flex-direction:column ;
            padding:20px ;
            img{
                width:100% ;
            }
        }
        @media (max-width:375px){
            justify-content:center ;
        }
    }
    @media (max-width:768px){
        width:100%;
    }


`
export { PostListStyle };