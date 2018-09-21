import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
    
    render(props) {
        // console.log(this.props)
    return (
    <div>
        <Product inventory= {this.props.inventory}/>
    </div>
    );
    }

}

export default Dashboard;