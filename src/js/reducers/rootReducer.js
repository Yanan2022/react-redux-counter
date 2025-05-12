// src/js/reducers/rootReducer.js
import { ADD_ARTICLE } from "../constants/actions-types";

// Charger les posts depuis le localStorage s'ils existent
const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

const initialState = {
    posts: savedPosts.length > 0
        ? savedPosts
        : [
            {
                id: 1,
                title: 'my first post',
                content: 'my first content'
            }
        ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            const updatedPosts = [...state.posts, action.payload];
            // Sauvegarde dans localStorage
            localStorage.setItem("posts", JSON.stringify(updatedPosts));
            return {
                posts: updatedPosts
            };
        default:
            return state;
    }
};

export default rootReducer;
