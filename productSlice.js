import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProductsAsync = createAsyncThunk(
    'products/getProductsAsync',
    async () => {
        const resp = await fetch('https://mocki.io/v1/ce066bfb-634d-48e7-9fd6-ee01823a0520')
        if (resp.ok) {
            const products = await resp.json()
            return products.products 
        }
        
    }
)
export let sortP = ''
export let sizeP = ''

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list:[],
        filteredProducts:[],
        status:null
    },
    reducers: {
        sortby(state,action) {
            sortP = action.payload

            action.payload !== ''
            ? state.filteredProducts.sort((a,b) => (
                sortP === 'lowestprice'
                ? (a.price > b.price ? 1 : -1)
                : (a.price < b.price ? 1 : -1)
              ))
            
            : state.filteredProducts.sort((a,b) =>(a.id > b.id) ? 1 : -1)
        },
        sizeBy(state,action){
            sizeP = action.payload
            action.payload.toUpperCase() === ''
            ?state.filteredProducts = [...state.list]
            :state.filteredProducts = [...state.list].filter(x => x.availableSizes.indexOf(action.payload.toUpperCase()) !== -1)
        },
        filterBy(state,action){
            state.list = action.payload
        }
    },
    extraReducers: {
        [getProductsAsync.pending] : (state,action) => {
            state.status = 'loading'
        },
        [getProductsAsync.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.filteredProducts = payload
            state.status = 'success'
        },
        [getProductsAsync.rejected] : (state,action) => {
            state.status = 'failed'
        }

    }
})
export const {sortby,sizeBy,filterBy} = productsSlice.actions
export default productsSlice.reducer