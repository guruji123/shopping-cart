import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import { Link } from 'react-router-dom';
import './index.css';
import {addItem} from '../action/addCart';
import {deleteItem} from '../action/addCart'
import "react-table/react-table.css";
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
const Columns = [
    {Header:'ID',accessor:'id'},
    {Header:'Name',accessor:'name'},
    {Header:'Price',accessor:'price'},
    {Header:'Location',accessor:'location'},
    {Header:'Quantity',accessor:'qty'},
    {Header:'Add',  accessor:'add'},
    {Header:'Remove',  accessor:'remove'}
]
class ProductList extends Component {

    state={
        Columns:[],
        data:[],
        reRender:true
    }

componentDidMount(){
    const {Products = [] } = this.props;
    this.setData(Products)
}

setData(Products){
    let rows = [];
    Products.forEach(item =>{
        let row = {};
        Columns.forEach(col=>{
            row[col.accessor] = item[col.accessor]
        })
        row.add = <div
         style={{cursor:"pointer"}}
          onClick={()=>{
            this.props.addItem(item);
            this.setState({reRender:true})
          }
          }
          key={item.name}
          >
          <img src='./add.png' alt='add' style={{width:"33px"}}/>
            
        </div>;
         row.remove = <div
         style={{cursor:"pointer"}}
          onClick={()=>{
            this.props.deleteItem(item);
            this.setState({reRender:true})
          }
          }
          key={item.name}
          >
           <img src='./remove.png' alt='remove' style={{width:"33px"}}/>
        </div>
        rows.push(row);
    })
    this.setState({data:rows})
}
componentDidUpdate = (prevProps) =>{
    const {Products} = this.props;
    if(prevProps.update!==this.props.update){
        this.setData(Products);
    }
}
    render() {
        const { data } = this.state;
        return (
            <div className="container">
            <header className="header bg-primary col-sm-12">
            <div className="headerMenu">
            <div onClick={this.handlecheck}><h1>Shopping Cart</h1></div>
            <Link to="/"><div className="logout"><img src="./logout.png" alt="logout"/></div></Link>
            </div>
            </header>
            <ReactTable
                data={data}
                columns={Columns}
                minRows={1}
                defaultPageSize={25}
                style={{
                    textAlign: "center"
                }}
            /> 
            <Link to="/cart"><div className="linktoCart">Go to Cart</div></Link>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        Products: state.products,
        update:state.update
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addItem: (item) => { dispatch(addItem(item))},
        deleteItem: (item) => { dispatch(deleteItem(item))}
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
