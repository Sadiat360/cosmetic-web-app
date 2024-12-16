import './Products.scss';

function Products({product}){

    return(
        <>
      

        <figure className="sellers__card">
             <img className="sellers__img" src={` http://localhost:7070/images/${product.image}`} alt="image"/>
            <p className="sellers__name">{product.brand}</p>
            <p className="sellers__price">{product.price}</p>  

        </figure>

    

    </>
    )
}

export default Products;