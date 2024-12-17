import './SkinCare.scss';
import { IoMdStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";


function SkinCare({skincare}){

    return(
          
        <figure className='skincare-card'>
            <img className='skincare-card__image' src={`http://localhost:7070/images/${skincare.image}`} alt="image" />
            
            <ul className='skincare-card__list'>
                <li className='skincare-card__item'><IoMdStar /></li>
                <li className='skincare-card__item'><IoMdStar /></li>
                <li className='skincare-card__item'><IoMdStar /></li>
                <li className='skincare-card__item'><IoMdStar /></li>
                <li className='skincare-card__item'><FaRegStar /></li>
                <p className='skincare-card__like'>{skincare.likes}</p>
            </ul>

            <p>{skincare.name}</p>
            <p>{skincare.description}</p>
            <p>{skincare.price}</p>


            <button className='hero__btn'>add to cart</button>


        </figure>
    )
}
export default SkinCare;