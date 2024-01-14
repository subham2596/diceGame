import React from 'react';
import dice1 from "../Images/dices 1.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='max-w-5xl mx-auto flex justify-between items-center'>
        <img src={dice1} alt="" />
        <div className='flex flex-col items-end gap-3'>
          <h1 className='text-6xl font-bold'>DICE GAME</h1>
          <Link to="playing" className="w-40 px-4 py-1 rounded-sm bg-black text-white text-center">Play Now</Link>
        </div>
    </div>
  )
}

export default HomePage;