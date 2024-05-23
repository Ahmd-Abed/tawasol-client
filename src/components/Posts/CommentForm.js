import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/modules/posts";


const CommentForm = ({postId, addComment }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addComment(postId,{text})
        setText("")
    }


    return (
        <div className="post-card">
            <p className="form-title center">Leave a comment</p>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div>
                    <textarea placeholder="Enter Your Comment:"
                        name="text" value={text} required onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default connect(null,{addComment})(CommentForm)