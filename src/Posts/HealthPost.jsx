import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext';

const HealthPost = () => {
    const {data } = useAuth();
    const { postId } = useParams();
        const post = data.find((post) => post.id === postId);
        const navigate = useNavigate();
    
        if(!post || !post.isauthenticate){
            navigate('/login');
            return null;
        }


  return (
    <div class="container">
        <button className='btn btn-outline-dark py-0' onClick={() => { navigate('/blogs/health&fitness_blog'); }}>Back</button>
            <div class="container">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                </div>
        </div>
  )
}

export default HealthPost
