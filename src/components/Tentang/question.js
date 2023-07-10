import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question '>
      <header>

        <div className='flex  w-[22rem] md:w-[30rem]    rounded-md  mt-5'>


          <h4 onClick={() => setExpanded(!expanded)} className='question-title cursor-pointer -mt-5 my-auto mx-5 text-left'>
          <button  className='btn p-1 border-2' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineDown /> : <AiOutlineRight />}
        </button>
          {title}
          {expanded && <h1 className='text-gray-700 font-[Poppins] pr-3 ml-4'>{info}</h1>}
        </h4>
        
        
          </div>
         
       

       
      </header>
      
    </article>
  )
}

export default Question