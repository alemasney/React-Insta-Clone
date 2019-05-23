import React from 'react';
import './AddComment.css';

const AddComment = () => {
    return (
        <div className="add-comment">
            <form>
                <input type='text' placeholder='Add a comment...' name='comment'></input>
            </form>
            <span><i className="fas fa-ellipsis-h"></i></span>
        </div>
    )
}

export default AddComment;