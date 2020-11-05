import React, { Component } from 'react';
import data from '../data/products.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ProductOverlay extends Component {
    state = {
        loadedProduct: null,
        productImages: []
    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedProduct || (this.state.loadedProduct && this.state.loadedProduct.id !== this.props.id)) {
                let product = data.groups.find(product => {
                    return product.id = this.props.id;
                });
                this.setState({ loadedProduct: product })
                this.setState({ productImages: product.images })
            }
        }
    }
    render() {
        this.state.productImages.map(image=>{
            console.log(image.href);
        })
        return(
            <div>
                
            </div>
        )
        
    }
}
export default ProductOverlay;