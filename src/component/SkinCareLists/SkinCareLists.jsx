import './SkinCareLists.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SkinCare from '../SkinCare/SkinCare';


function SkinCareList(){
      
    const [skinCare, setSkinCare] = useState([]);
     useEffect(() =>{
        async function getSkinCare() {

            try{
                const response = await axios.get('http://localhost:7070/skin/');
                setSkinCare(response.data);
                console.log(response.data);
            } catch(error){
                console.error('Error fetching skincare', error);
            }
           
            
        }
        getSkinCare();
     }, []);
   

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
  

    return(
        <>
          <section className='skincare'>
            <h2 className='skincare-title'>FOR ALL SKIN TYPE</h2>
            
                <Carousel responsive={responsive}>
                {skinCare.map((skincare) => {
                         return <SkinCare key={skincare.id}  skincare={skincare}/>
                })}
                </Carousel>

           
          
           


          </section>
      
       </>
    )
}
export default SkinCareList;