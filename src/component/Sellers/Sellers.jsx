import './Sellers.scss';
// import ProductLists from '../ProductLists/ProductLists';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../Products/Products';

function Sellers(props){

    const [product, setProduct] = useState([]);


   useEffect(() => {

    async function getProducts() {

      try{
        const response = await axios.get('http://localhost:7070/products/');
        console.log(response.data);
        setProduct(response.data);

      } catch (error){
        console.error(`error getting products:`, error);
      }
      
    }
    getProducts();

  }, []);
    return(


        <section className='sellers'>

            <article className='sellers-title-text__box'>
                
                 <h2 className='sellers-box__title'>BEST SELLERS</h2>

                 <p className='sellers-box__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum quos, voluptatem eos doloribus reiciendis molestiae minus animi corrupti impedit. Suscipit, ab numquam. Vitae iste molestias fugit asperiores voluptates rem.</p>
            </article>

            <div className='sellers-blocks'>
                
                <div className='sellers-blocks__empty'>

                </div>
                <div className='sellers-blocks__empty'>

                </div>

                <div className="sellers__card-box">

                { product.map((product) => {
                   return  <Products key= {product.id} product ={product}/>
                 })
           
                 }

                </div>
               
            </div>


        </section>
    )
}

export default Sellers;
