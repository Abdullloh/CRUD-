import styled from 'styled-components';

const PostListStyle = styled.div`
    width:75% ;
    height:100% ;
    ul{
        display:flex ;
        flex-wrap:wrap;
        list-style: none;
        li{
            height:200px ;
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
    }

`
export { PostListStyle };