import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "table-row",
    initialState: {company: {}},
    reducers: 
    {
        createCompany(state, action)
        {
            state.company = action.payload
        }
    }
});

export const companyActions = companySlice.actions;
export default companySlice;