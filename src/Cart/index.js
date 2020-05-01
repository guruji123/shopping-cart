import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cheese from '../images/cheese.jpg';
import crisps from '../images/crisps.jpg';
import pizza from '../images/pizza.jpg';
import chocolate from '../images/chocolate.jpg';
import flour from '../images/flour.jpg';
import almonds from '../images/almonds.jpg';

class Cart extends Component{

    state={
        
    }
componentWillReceiveProps(nextProps){

}
  
    render () {
        console.log('this is cart', this.props.cart);
       return(
           <Fragment >
             <Link to="/product"> <div >Back to products</div></Link>
             <div>
                 <h1>Cart Details</h1>
                 <table className="table- col- table-sm m-4 table-bordered" width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>       
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>1</th>
                        <th>Cheese</th>
                        <th><img src={cheese} height="100px"/></th>
                        <th>2.50</th>
                        <th>2</th>       
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Crisps</th>
                        <th><img src={crisps} height="100px"/></th>
                        <th>3</th>
                        <th>5</th>       
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Pizza</th>
                        <th><img src={pizza} height="100px"/></th>
                        <th>4</th>
                        <th>7</th>       
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>Chocolate</th>
                        <th><img src={chocolate} height="100px"/></th>
                        <th>1.50</th>
                        <th>8</th>       
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>Flour</th>
                        <th><img src={flour} height="100px"/></th>
                        <th>1.50</th>
                        <th>0</th>       
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>Almonds</th>
                        <th><img src={almonds} height="100px"/></th>
                        <th>3</th>
                        <th>1</th>       
                    </tr>
                </tbody>
                </table>

             </div>
           </Fragment>
       )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);