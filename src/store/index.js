import data from "../data/data.js";
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState={
    data:data
}


const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        like:(state,action)=>{
          state.data[action.payload].likes +=1,
          state.data[action.payload].status=true
        },
        dislike:(state,action)=>{
            state.data[action.payload].likes -=1,
            state.data[action.payload].status=false
            
        }
    }
});


const store =configureStore({
    reducer:{
        posts:postSlice.reducer
    }
})
export default store;
export const { like,dislike } = postSlice.actions;