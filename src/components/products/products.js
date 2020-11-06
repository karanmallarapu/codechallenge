import { React, Component } from 'react';
import Product from '../products/product/product';
import data from '../data/products.json';
import ProductOverlay from '../product-overlay/productOverlay';
import '../products/products.css';
class Products extends Component {
    state = {
        products: [],
        selectedProductId: null,
        error: false
    }
    /*componentDidMount() {
        axios.get(data).then(response => {
                this.setState({products:response.data.groups});
            })
            .catch(err => {
                this.setState({ error: true });
            })
    }*/
    productSelectedHandler=(id)=>{
        this.setState({selectedProductId:id});
    }
    render() { 
        let products = <p style={{ textAlign: "center" }}>Something went wrong</p>
        if (!this.state.error) {
            products = data.groups.map((product) => {
                //console.log(product);
                return <Product key={product.id}
                    imageUrl={product.hero.href}
                    name={product.name}
                    price={{...product.price}}
                    clicked={()=>this.productSelectedHandler(product.id)}
                />
            });
        }
        return (
            <div>
                <section className="Products">
                    {products}
                </section>
                <section>
                    <ProductOverlay id={this.state.selectedProductId} displayed="true"/>
                </section>
            </div>
        )
    }
}
export default Products;
