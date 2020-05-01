

let initState = {
    products: [
        {id: '1', name: 'Cheese', price: '2.50', location: 'Refrigerated foods', qty: 2},
        {id: '2', name: 'Crisps', price: '3', location: 'The Snack isle', qty: 5},
        {id: '3', name: 'Pizza', price: '4', location: 'Refrigerated foods', qty: 7},
        {id: '4', name: 'Chocolate', price: '1.50', location: 'The Snack isle', qty: 8},
        {id: '5', name: 'Self-raising flour', price: '1.50', location: 'Home baking', qty: 0},
        {id: '6', name: 'Ground almonds', price: '3', location: 'Home baking', qty: 1},

    ],
    cart:[],
    update:0
}
const initCheck ={
    'Cheese':2,
    'Crisps': 5,
     'Pizza':7,
    'Chocolate':8,
    'Self-raising flour':0,
    'Ground almonds': 1,
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_ITEM') {
        let newState = state.products;
        let newCart = state.cart;
        let newupdate = state.update;
        newState.forEach((item,index) =>{
            if(action.item.name === item.name){
                if(initCheck[item.name]>item.qty){
                 item.qty = item.qty+1;
                }
            }
         if(newCart.hasOwnProperty(item.name)){
             if(action.item.name === item.name){
                 if(newCart[item.name].qty > 0){
                 newCart[item.name].qty--;
                     
                 }
             }
         }else{
             if(action.item.name === item.name){
                 newCart[item.name] = {qty:0};
             }
         }
        });
        newupdate = newupdate+1;
        return {
            ...state,
            products:newState,
            cart:newCart,
            update:newupdate
        }
    }
    if(action.type ==="ADD_ITEM"){
       let newState = state.products;
       let newCart = state.cart;
       let newupdate = state.update;
       newState.forEach((item,index) =>{
           if(action.item.name === item.name){
               if(item.qty>0){
                item.qty = item.qty-1;
               }
           }
        if(newCart.hasOwnProperty(item.name)){
            if(action.item.name === item.name){
                newCart[item.name].qty++;
            }
        }else{
            if(action.item.name === item.name){
                newCart[item.name] = {qty:1};
            }
        }
       });
       newupdate = newupdate+1;
       return {
           ...state,
           products:newState,
           cart:newCart,
           update:newupdate
       }
    }
    return state;
}
export default rootReducer