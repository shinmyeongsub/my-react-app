import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "신명섭",
        comment: "안녕하세요, 먕두입니다.",
    },
    {
        name: "김소영",
        comment: "안녕하세요, 레이첼입니다.",
    },
    {
        name: "황원준",
        comment: "안녕하세요, 웨인입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;