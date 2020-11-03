import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider'


function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();

    const addtobasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
            id: id,
            title: title,
            image: image,
            price:price,
            rating: rating
            }
        });
    };

    return (
        <div className="product">
            <div className="Product_Info">
            <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p> &#11088;</p>
                    ))}
                    
                </div>
                </div>
                

                <img src={image} alt="" />

                <button onClick={addtobasket}>Add To Basket</button>
            
            
        </div>
    )
}

export default Product
