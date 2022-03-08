import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import PostListById from "../components/PostListById";


const routes = [
    {
        key:'main',
        path:'/',
        element:<PostList/>,
        exact:true,
    },
    {
        key:'postList',
        path:'/post-list',
        element:<PostList/>,
        exact:true,
    },
    {
        key:'addPost',
        path:'/add-post',
        element:<AddPost/>,
        exact:true,
    },
    {
        key:'addPost',
        path:'/post-list/:id',
        element:<PostListById/>,
        exact:true,
    }
]

export default routes;