import './QuestionForm.scss';

function QuestionForm(){


    return(

        <div className="question-form__box">

          <form className="question-form">

            <label htmlFor="question" className="question-form__label">Question Text</label>
            
            <textarea name="text" 
             row="20" 
             className="question-form__txt">
             </textarea>
            
            <label htmlFor="nickName"  className="question-form__label">Nickname</label>
            
            <input type="text" 
            placeholder='Example: bob27'
            className="question-form__input" /> 
            
            <label htmlFor="email" className="question-form__label">Email</label>
            
            <input type="text" 
            placeholder='Example:yourname@example.com' 
            className="question-form__input"/>  
            
            <label htmlFor="nickName" className="question-form__label">Location</label>
            
            <input type="text" 
            placeholder='Example: Calgary, Alb' 
            className="question-form__input"/>  
            
            <button className='hero__btn'>Submit</button>
          </form>
          
        </div>
                  
            
    )
}
export default QuestionForm;