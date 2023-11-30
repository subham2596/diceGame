import { configureStore } from "@reduxjs/toolkit";
import ChoiceSlice from "./ChoiceSlice";


const store = configureStore({
    reducer: {
        numChoice: ChoiceSlice
    }
})

export default store;