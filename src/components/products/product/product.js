import React from 'react';
import '../product/product.css';
const Product = (props) => {
    return (
        <article className="Product">
            <div className="Product-img" onClick={props.clicked}>
                <img src={props.imageUrl} alt={props.name} />
            </div>
                <h1>{props.name}</h1>
                <p>Regular Price:{props.price.regular!=null? <b> $ {props.price.regular}</b> : ' Ask'}</p>
                <p>Selling Price:{props.price.selling!=null? <b> $ {props.price.selling}</b> : ' Ask'}</p>
        </article>
    )
}
export default Product;