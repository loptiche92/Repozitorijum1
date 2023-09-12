import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartTotalQuantity:0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart:  (state,action) => {
            //if(action.payload && action.payload.id){
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1
            }else{
                const tempProduct = {
                    ...action.payload,
                    cartQuantity:1
                }
                state.cartItems.push(tempProduct)
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
        //}
            
        },
        deleteProductFromCart: (state,action) => {
            const nextCartItems = state.cartItems.filter(x=> x.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        decreaseCart: (state,action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity -= 1
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
        },
        removeFromCart: (state,action) => {
            state.cartItems.map((cartItem) => {
                if(cartItem === action.payload.id){
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    )
                    state.cartItems = nextCartItems
                }
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
                return state
            })
        },
        clearCart (state,action){
            state.cartItems = []
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        }
    }
})
export const {addToCart,removeFromCart,decreaseCart, deleteProductFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer