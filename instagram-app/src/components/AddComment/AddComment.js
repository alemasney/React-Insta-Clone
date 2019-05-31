import React from 'react';
import './AddComment.css';

const AddComment = props => {

    return (
        <div className="add-comment">
            <form onSubmit={props.addNewComment}>
                <input type='text' placeholder='Add a comment...' name='text' value={props.input.text} onChange={props.changeHandler}></input>
            </form>
            <span><i className="fas fa-ellipsis-h"></i></span>
        </div>
    )
}

export default AddComment;

