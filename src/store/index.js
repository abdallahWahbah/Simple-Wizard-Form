import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./CompanySlice";

const store = configureStore({
    reducer: {company: companySlice.reducer}
});

export default store;