import React from 'react';
import Post from '../Post/Post';

const AllPost = (props) => {
    return (
        <div>
            {
                 props.postsData.map((post, index) =>{
                     return ( 
                        <Post  postInfo ={post} key={index } />
                     );  
                 }) 
            }  
        </div>
    )
}

export default AllPost
