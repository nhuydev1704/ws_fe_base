import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        collapse: false,
    },
    reducers: {
        openSidebar: (state) => {
            state.collapse = true;
        },
        hiddenSidebar: (state) => {
            state.collapse = false;
        },
    },
});

const { reducer: appReducer, actions } = rootSlice;
export const { openSidebar, hiddenSidebar } = actions;
export default appReducer;
