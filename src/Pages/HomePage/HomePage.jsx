import './HomePage.scss';
import Header from '../../component/Header/Header';
import Hero from '../../component/Hero/Hero';
import Sellers from '../../component/Sellers/Sellers';
import Discount from '../../component/Discount/Discount';
import Question from '../../component/Question/Question';
import QuestionForm from '../../component/QuestionForm/QuestionForm';
import { useState } from 'react';
import SkinCareList from '../../component/SkinCareLists/SkinCareLists';

function HomePage(){

    const [openForm, setOpenForm] = useState(false);
    
    function handleFormClick (){

        setOpenForm(!openForm);
    }

    return(
        <>
        

        <Header />

        <main className='main'>
            <Hero />
            <Sellers/>
            <Discount />
            <Question  handleFormClick = {handleFormClick}/>
           { openForm === true ? (<QuestionForm />) : null} 

           <SkinCareList />
        </main>

        </>
    )
}

export default HomePage;