import { createSlice } from "@reduxjs/toolkit";

const ChoiceSlice = createSlice({
    name: "numChoice",
    initialState: {
        number: 0,
        totalScore: 0,
        diceImageDots: 1
    },
    reducers: {
        selectNum: (state, action) => {
            state.number = action.payload
        },
        setChoiceToZero: (state) => {
            state.number = 0
        },
        addTotal: (state, action) => {
            state.totalScore = state.totalScore + action.payload
        },
        subtractTotal: (state) => {
            state.totalScore = state.totalScore - 1
        },
        resetScore: (state) => {
            state.totalScore = 0
        },
        updateDiceImageDots: (state, action) => {
            state.diceImageDots = action.payload
        },
    }
})


export const {selectNum, addTotal, subtractTotal, resetScore, setChoiceToZero, updateDiceImageDots} = ChoiceSlice.actions;
export default ChoiceSlice.reducer;