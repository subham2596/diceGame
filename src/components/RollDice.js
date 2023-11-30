import TopSection from './TopSection';
import dice_1 from "../Images/dice_1.png";
import dice_2 from "../Images/dice_2.png";
import dice_3 from "../Images/dice_3.png";
import dice_4 from "../Images/dice_4.png";
import dice_5 from "../Images/dice_5.png";
import dice_6 from "../Images/dice_6.png";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTotal, resetScore, setChoiceToZero, subtractTotal, updateDiceImageDots } from '../utils/ChoiceSlice';
import { removeSelection } from '../utils/globals.';



const Dice = () => {
  const [flashError, setFlashError] = useState(false)
  const [match, setMatch] = useState(false)
  const [unmatch, setUnmatch] = useState(false)

  const dispatch = useDispatch();
  const selectedNumber = useSelector(store => store.numChoice.number)
  const diceImageDots = useSelector(store => store.numChoice.diceImageDots)

  const rolldiceHandler = () => {
    if(selectedNumber != 0) {
      let randomNum = Math.floor(Math.random()*6) + 1;
      dispatch(updateDiceImageDots(randomNum))
      console.log("randomNum",randomNum)
      console.log("selectedNumber",selectedNumber)
      if (randomNum == selectedNumber){
        dispatch(addTotal(randomNum))
        setMatch(true);
        setTimeout(()=>{setMatch(false)},3000)
      } else {
        dispatch(subtractTotal())
        setUnmatch(true);
        setTimeout(()=>{setUnmatch(false)},2000)
      }
      dispatch(setChoiceToZero())
    } else {
      setFlashError(true)
      setTimeout(()=>{setFlashError(false)},3000)
    }
    
  }

  const imageSelction = () => {
    let diceImage = diceImageDots == 1 ? dice_1
                  : diceImageDots == 2 ? dice_2
                  : diceImageDots == 3 ? dice_3
                  : diceImageDots == 4 ? dice_4
                  : diceImageDots == 5 ? dice_5
                  : dice_6
    return diceImage;
  }

  return (
    <div className='w-52 flex flex-col gap-3 items-center relative'>
      {/* <img src="" alt="" /> */}
      {flashError && <h3 className='text-sm text-white border bg-red-500 rounded-md px-3 py-1 absolute top-[-40px]'>Please make a choice first!</h3>}
      {unmatch && <h3 className='text-sm text-red-500 border border-red-500 rounded-md px-3 py-1 absolute top-[-40px]'>Oops, Tough Luck!</h3>}
      {match && <h3 className='text-sm text-green-500 border border-green-500 rounded-md px-3 py-1 absolute top-[-40px]'>Great, Numbers Twinning!</h3>}
      <img className='w-full' src={imageSelction()} alt="roll-the-dice" onClick={rolldiceHandler} />
      <h2 className='text-[24px]'>Click on Dice to roll</h2>
    </div>
  )
}



const BottomButtons = () => {
  const [displayRules, setDisplayRules] = useState(false)
  const rulesHandler = () => {
    setDisplayRules(!displayRules);
  }

  const dispatch = useDispatch();
  const resetScoreHandler = () => {
    dispatch(resetScore());

    // removing selection from number choice
    removeSelection();

    // dice image to 1 dice
    dispatch(updateDiceImageDots(1))
  }

  return (
    <div className='flex flex-col gap-3 relative'>
      <button className="w-40 px-4 py-1 rounded-sm bg-white border border-black text-center" onClick={resetScoreHandler}>Reset Score</button>
      <button className="w-40 px-4 py-1 rounded-sm bg-black text-white text-center" onClick={rulesHandler}>Show Rules</button>
      {displayRules && 
        <div className="w-[600px] diceRules absolute top-28 left-[-200px] bg-[#FBF1F1] p-5">
          <h1 className='font-bold'>How to play dice game</h1>
          <ul>
            <li>Select any number.</li>
            <li>Click on dice image.</li>
            <li>After clicking on dice if selected number is equal to dice number, you will get same point as dice.</li>
            <li>If you get wrong guess then 2 points will be deducted.</li>
          </ul>
        </div>}
    </div>
  )
}

const RollDice = () => {

  return (
    <div className='max-w-5xl h-[100vh] m-auto flex flex-col justify-evenly items-center'>
        <TopSection />

        <div className='flex flex-col gap-3 items-center'>
          <Dice />
          <BottomButtons />
        </div>
    </div>
  )
}

export default RollDice;