import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectNum } from '../utils/ChoiceSlice';
import { removeSelection } from '../utils/globals.';

const ScoreBoard = () => {
    const totalScore = useSelector(store => store.numChoice.totalScore)

    return (
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='font-bold text-5xl'>{totalScore}</h1>
            <h2 className='font-bold'>Total Score</h2>
        </div>
    )
}


const SelectYourNumber = () => {
    const dispatch = useDispatch();

    const selectnumber = (e) => {
        dispatch(selectNum(e.target.innerHTML))
        console.log("action disppatched", e.target.innerHTML)
        // remove existing selection if any
        removeSelection();

        // highlight new selection
        e.target.classList.add("bg-black", "text-white")
    }

    return (
        <div className='flex flex-col gap-3 items-end'>
            <div className='flex gap-3 numbersContainer'>
                {new Array(6).fill('').map((el, index) => {
                    return <div key={index} className='px-4 py-2 border border-black cursor-pointer font-bold' onClick={selectnumber}>{index + 1}</div>
                })}
            </div>
            
            <h2 className='font-bold'>Select Number</h2>
        </div>
    )
}

const TopSection = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <ScoreBoard />
        <SelectYourNumber />
    </div>
  )
}

export default TopSection;