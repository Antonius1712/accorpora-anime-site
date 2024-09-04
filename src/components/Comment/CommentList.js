"use client"

import { useEffect, useState } from "react";
import CommentBox from "./CommentBox";

const CommentList = ({ mal_id, anime_title, anime_img, user_email, username }) => {
    const [isCreated, setIsCreated] = useState(false);
    const [error, setError] = useState(false);

    const [comments, setComments] = useState([]);
    const [comment, setCommentMessage] = useState("");

    const HandleCommentMessage = (e) => {
        setCommentMessage(e.target.value)
    }

    const HandleSubmitMessage = async (e) => {
        e.preventDefault();

        if( comment === '' ){
            setError(true)
            return
        }else{
            setError(false)
        }

        const created_at = new Date().toISOString();

        const data = { mal_id, anime_title, anime_img, user_email, username, created_at, comment };

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const insertedComment = await response.json();

        if (insertedComment.status == 200) {
            setIsCreated(!isCreated);
            setCommentMessage("");
            fetchComments(mal_id);
        }
        return
    }

    const fetchComments = async (mal_id) => {
        const response = await fetch(`/api/v1/comment?mal_id=${mal_id}`);
        const { data } = await response.json();
        setComments(data);
    };

    const HandleKeyUp = (e) => {
        if( e.target.value === '' ){
            setError(true);
        }else{
            setError(false);
        }
        setCommentMessage(e.target.value);
        if (e.ctrlKey && e.key === "Enter") {
            HandleSubmitMessage(e);
        }
    }

    useEffect(() => {
        fetchComments(mal_id);
    }, [mal_id]);

    return (
        <div>
            <div className="border-t border-color-dark">
                {comments.map((comment) => {
                    return (
                        <div className="bg-color-[#bbb] rounded-md p-4 mt-2 border-color-accent border-t">
                            <span className="flex justify-between">
                                <p>{comment.username}</p>
                                <p className="sm:text-[14px] text-md">{new Date(comment.created_at).toLocaleString()}</p>
                            </span>
                            <span>
                                {comment.comment}
                            </span>
                        </div>
                    )
                })}
            </div>
            {/* <CommentBox mal_id={mal_id} user_email={user?.email} username={user?.name} /> */}
            {user_email ? 
            <div>
                <p className={error ? 'text-color-red' : 'hidden'}>*tidak bisa posting blank.</p>
                <textarea onKeyUp={HandleKeyUp} onChange={HandleCommentMessage} value={comment} className={`w-full mt-2 p-4 rounded-md ${error ? 'border-color-red border-2' : ''}`}></textarea>
                <button onClick={HandleSubmitMessage} className="bg-color-secondary text-color-primary rounded-md px-4 py-2">
                    Tulis Komentar
                </button>
            </div>
            : ''
            }

        </div>
    )
}

export default CommentList