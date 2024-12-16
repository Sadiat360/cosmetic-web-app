import './Question.scss';
import QuestionForm from '../QuestionForm/QuestionForm';
import { useState } from 'react';

function Question({handleFormClick}){

   
    return(
        <section className='question'>

            <h2 className='question-title'>QUESTIONS</h2>

            <div className='question-btn__container'>
            <button className='question-btn' onClick = {handleFormClick}>ASK A QUESTION</button>
            </div>

            <p className='question-text'>We'd love to answer your question.</p>

           
            
        </section>
    )
}
export default Question;