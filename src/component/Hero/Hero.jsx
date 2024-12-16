import './Hero.scss';
import imagesData from '../../assets/images/Hero image.png';

function Hero(){

    return(
         
        <section className='hero'>

            <img className='hero-image' src={imagesData} alt="image" />

            <article className='hero-title-text__box'>

                <h1 className='hero__title'> BEAUTY BEYOND YOUR IMAGINATION</h1>
                <p className='hero__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, magni nobis. Quasi dolores neque nobis facilis dolore dicta, odio assumenda est, explicabo tenetur doloremque accusantium deserunt maxime, quaerat provident impedit?
                Sapiente reprehenderit, totam unde neque quo, nemo pariatur et atque reiciendis possimus ipsum a aut doloribus! A debitis eveniet </p>

            <button className='hero__btn'>View all Product</button>

            </article>

            

        </section>
    )
}
export default Hero;