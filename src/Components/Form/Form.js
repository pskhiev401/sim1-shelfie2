import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
    
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }

this.imgurlHandler = this.imgurlHandler.bind(this);
    }


    imgurlHandler (element){
        this.setState({name: element.target.value})
            // {price: element.target.value},{imgurl: element.target.value})
    }


    addToInventory(id){
        // console.log(element);
        // axios.get('/api/product/').then(response => {
        //     console.log(response);
            // this.setState()
            // console.log(this.state);
        // })
        
    }

    render() {
    
    return (
    <div>
        <div className='form'>
            <div className='form_img_preview'>IMG PREVIEW BOX HERE</div>
            {/* style="background-image: url('');" */}
            <p>Image URL:</p>
            <input onChange= {(element) => this.imgurlHandler(element.target.value)}></input>
            <p>Product Name:</p>
            <input onChange= {(element) => this.textInputHandler(element.target.value)}></input>
            <p>Price:</p>
            <input onChange= {(element) => this.textInputHandler(element.target.value)} pattern='[0-9]*'></input>
            <div className='form_button-box'>
                <button>Cancel</button>
                <button onClick={ () => this.addToInventory()}>Add to Inventory</button>
            </div>
        </div>
    </div>
    );
    }
}

export default Form;

// damn buttons dont work, stupid onchange isnt updating state