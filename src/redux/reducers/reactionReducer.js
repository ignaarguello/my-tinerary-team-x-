import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionAction";

const { getReactions, updateReaction, getMyReactions } = reactionActions;

const initialState = {
    reactioned: [
        {
            name: "Like",
            reactioned: false,
        },
        {
            name: "Love",
            reactioned: false,
        },
        {
            name: 'Not-Like',
            reactioned: false,
        },
        {
            name: 'Surprise',
            reactioned: false,
        }
    ],
    myReactions: [],

};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getReactions.fulfilled, (state, action) => {
                if (action.payload.success) {
                    return { ...state, reactions: action.payload.data, cantReactions: action.payload.howManyReactions, idReaction: action.payload.id };
                } else {
                    return { ...state, reactions: [], cantReactions: {}, idReaction: "" };
                }
            })
            .addCase(updateReaction.fulfilled, (state, action) => {
                state.reactioned.forEach(reaction => {
                    if (reaction.name === action.payload.name) {
                        reaction.reactioned = !reaction.reactioned
                    }
                })
            })
            .addCase(getMyReactions.fulfilled, (state, action) => {
                return {...state, myReactions: action.payload}
            })
    }
);

export default reactionReducer;