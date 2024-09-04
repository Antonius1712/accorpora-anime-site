"use client"

import { useState } from "react"

const CommentBox = ({ mal_id, user_email, username }) => {
    const [isCreated, setIsCreated] = useState(false);
    const [comment, setComment] = useState("");

    const HandleComment = (e) => {
        setComment(e.target.value)
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const created_at = new Date().toISOString();

        const data = { mal_id, user_email, username, created_at, comment };

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const comments = await response.json();
        if (comments.status == 200) {
            setIsCreated(!isCreated);
            setComment("");
        }
        return
    }

    return (
        <div>
            <textarea onChange={HandleComment} value={comment} className="w-full mt-2 p-4 rounded-md"></textarea>
            <button onClick={HandleSubmit} className="bg-color-secondary text-color-primary rounded-md px-4 py-2">
                Tulis Komentar
            </button>
        </div>
    )
}

export default CommentBox