import styled from 'styled-components'


const PostById= styled.div`
padding:35px 10px ;
    ul{
        list-style:none ;
        li{
                border:2px solid rgb(104 60 184) ;
                margin:10px 0 ;
                cursor:pointer ;
                padding: 10px 5px;
                 border-radius: 8px;
                     &  > .active{
                         color:green ;
                     span {
                         border:2px solid rgb(104 60 184) ;
                     }
                 }
        }
    }

`

export {PostById}