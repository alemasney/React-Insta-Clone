import React from 'react';

const CommentSection = props => {
    return (
        <div className='comment-section'>
            {props.commentInfo.map(comment => (
                <p key={comment.text}><strong>{comment.username} </strong>{comment.text}</p>
            ))}
        </div>
    )
}

export default CommentSection;