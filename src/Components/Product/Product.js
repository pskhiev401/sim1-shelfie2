import React, { Component } from 'react';

class Product extends Component {
    render() {
        console.log(this.props)
        let productList = this.props.inventory.map((element, index) => {        
    return (
            <div className='product_box'>
                <div>Photo</div>
                <div>Price</div>
                <div>Name</div>
            </div>
        )})

    return (
        <div>
            {productList}
        </div>
    )
}
}
export default Product;