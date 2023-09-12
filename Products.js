import React, { useEffect } from 'react'
import util from '../util'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAsync } from '../productSlice'
import { addToCart } from '../cartSlice'
import Filter from '../components/Filter'

const Products = () => {
  const dispatch = useDispatch()
  const {filteredProducts,loading} = useSelector( state => state.products)
  useEffect(()=>{
    dispatch(getProductsAsync())
  }, [dispatch])

  const handleAddToCart = (product)=> {
    dispatch(addToCart(product))
  }
  if(loading) return <p>Loading...</p>


  return (
    <div>
      <div id='products'>
        <Filter/>
        <div className='row g-0'>
          {
            filteredProducts.map(x=> (
              <div key={x.id} className='col-md-4 my-2'>
              <div className='text-center boreder border-primary border-2 rounded productBox mx-auto'>
                  <a href={`#${x.id}`}>
                      <img src={`/products/${x.sku}_2.jpg`} alt={x.title}/>
                      <div>
                          <p>{x.title}</p>
                      </div>
                  </a>
                  <div>
                      <strong>{util.formatCurrency(x.price)}</strong>
                      <br/>
                      <button className='btn btn-primary' onClick={()=>handleAddToCart(x)}>Add to cart</button>
                  </div>
              </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Products

// export default class Products extends Component {
//   render() {
//     const productsItems = this.props.products.map(product => (
//         <div key={product.id} className='col-md-4'>
//             <div className='thumbnail text-center'>
//                 <a href={`#${product.id}`}>
//                     <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
//                     <div>
//                         <p>{product.title}</p>
//                     </div>
//                 </a>
//                 <div>
//                     <strong>{util.formatCurrency(product.price)}</strong>
//                     <br/>
//                     <button className='btn btn-primary' onClick={(e) => this.props.handleAddToCart(e,product)}>Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     ))
//     return (
//       <div className='row'>
//         {productsItems}
//       </div>
//     )
//   }
// }
