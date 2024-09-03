"use client"

import { useState } from "react";

const CollectionButton = ({ mal_id, user_email, judul_anime, img_anime }) => {
    const [isCreated, setIsCreated] = useState(false);
    const handleCollection = async (e) => {
        e.preventDefault();

        const data = { mal_id, user_email, judul_anime, img_anime };
        
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const collections = await response.json();
        if( collections.status == 200 ){
            setIsCreated(!isCreated);
        }
        return
    }
    return (
        <>
        {isCreated ? <p className="text-color-accent">Created</p> : <div className="text-color-accent mt-4">
            <button onClick={handleCollection} className="border-2 border-color-accent px-4 py-2 rounded-md">
                Add to Collection
            </button>
        </div>}
        </>
    )
}

export default CollectionButton