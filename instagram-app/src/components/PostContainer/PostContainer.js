import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../AddComment/AddComment';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            {props.postedItem.map( item => (
                <div key={item.timestamp} className='post-container'>
                    <div className='username-section'>
                        <img src={item.thumbnailUrl} alt='User thumbnail'/>
                        <h4>{item.username}</h4>
                    </div>
                    <img src={item.imageUrl} alt='user post' />
                    <div className='post-icons'>
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <p>{item.likes} likes</p>
                    <CommentSection commentInfo={item.comments} />
                    <AddComment />
                </div>
            ))}
        </div>
    )
}

export default PostContainer;