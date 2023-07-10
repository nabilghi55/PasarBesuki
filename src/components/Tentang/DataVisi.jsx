import React,{useState} from "react";
import data from './data'
import SingleQuestion from './question'



const FAQ=()=>{
  const [questions, setQuestions] = useState(data)
  return(
    <>
    <div className="faq" id="#faq">   
    
      <div className="">
         <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
    </div>
    </div>

    
    </>
  )
}
export default FAQ