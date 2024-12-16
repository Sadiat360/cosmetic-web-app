import comboData from '../../assets/images/combo-1.png';
import comboData2 from '../../assets/images/combo-2.png';
import './Discount.scss';
function Discount(){

    return(
        <section className="discount">

            <div className="discount-frame__left">
              

                <div className="discount-frame__box">
                    <h2 className="discount-frame__title">GET 20% DISCOUNT OFF COMBO PACK</h2>

                    <p className="discount-frame__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur ipsa? Ipsum porro voluptas nulla deserunt incidunt quas eius debitis molestiae? Sint laborum, neque iusto possimus aut voluptatum inventore alias.
                    Dignissimos facilis repellat numquam consectetur </p>

                    <button className="hero__btn">BUY NOW</button>

                </div>

                <img className="discount-image" src={comboData} alt="product image" />
            </div>
            <div className="discount-frame">
              

                <div className="discount-frame__box">
                    <h2 className="discount-frame__title">GET 20% DISCOUNT OFF COMBO PACK</h2>

                    <p className="discount-frame__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur ipsa? Ipsum porro voluptas nulla deserunt incidunt quas eius debitis molestiae? Sint laborum, neque iusto possimus aut voluptatum inventore alias.
                    Dignissimos facilis repellat numquam consectetur </p>
                    
                    <button className="hero__btn">BUY NOW</button>

                </div>

                <img className="discount-image" src={comboData2} alt="product image" />
            </div>
        </section>
    )
}
export default Discount;