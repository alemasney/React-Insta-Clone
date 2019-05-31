import React from 'react';
import AddComment from '../AddComment/AddComment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.commentInfo,
            username: "User1",
            text: "",
        }
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({
            comments: this.state.comments.concat({username: this.state.username, text: this.state.text}),
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map(comment => (
                    <p key={comment.text}><strong>{comment.username} </strong>{comment.text}</p>
                ))}
                <AddComment input={this.state.text} addNewComment={this.addNewComment} changeHandler={this.changeHandler} />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    username: PropTypes.string,
    text: PropTypes.string
}

export default CommentSection;