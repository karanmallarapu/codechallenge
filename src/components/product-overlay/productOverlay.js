import React, { Component } from 'react';
import data from '../data/products.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './productOverlay.css';

class ProductOverlay extends Component {
    state = {
        loadedProduct: null,
        productImages: [],
        isDisplayed:false
    }
    componentDidUpdate(prevProps,nextProps) {
        if(prevProps!=this.props)
        {
            if (this.props.id) {
                if (!this.state.loadedProduct || (this.state.loadedProduct && this.state.loadedProduct.id !== this.props.id)) {
                    let product = data.groups.find(product => {
                        return product.id === this.props.id;
                    });
                    this.setState({
                        loadedProduct: product,
                        productImages: product.images,
                        isDisplayed:this.props.displayed
                    });
                }
            }
        }
        
    }
    removeOverLayHandler=()=>{
        this.setState({isDisplayed:!this.state.isDisplayed})
    }
    render() {
        const images = this.state.productImages.map((image, index) => {
            return <div key={index} onClick={()=>this.removeOverLayHandler()}>
                <img src={image.href} alt={image.href}/>
            </div>
        });
        return (
            <div className="overlay" 
            style={{display:this.state.isDisplayed?'block':'none'}} >
                <div className="carousel">
                    <Carousel>
                        {images}
                    </Carousel>
                </div>
            </div>
        )

    }
}
export default ProductOverlay;
