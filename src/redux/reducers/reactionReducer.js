import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionAction";
import { useSelector } from "react-redux";

const { getReactions, updateReaction, getMyReactions, deleteReaction } = reactionActions;

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
                //console.log("STATE REACTION1", state);
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
            .addCase(deleteReaction.fulfilled, (state, action) => {
                
                console.log("ACTION PAYLOAD REACTION", action.payload);
                return{...state, }
            })
    }
);

export default reactionReducer;