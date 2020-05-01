import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cart extends Component{

   
    render () {
       const { cart = {} } = this.props;
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
                        <th>Quantity</th>       
                    </tr>
                </thead>
               <tbody>
                   {Object.keys(cart).map((item,index) =>{
                    return(
                        <tr key={item}>
                        <th>{index}</th>
                        <th>{item}</th>
                        <th><img src={`./${item}.jpg` } alt='product' height="100px"/></th>
                        <th>{cart[item].qty}</th>       
                       </tr>
                    )
                      
                   })}
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
