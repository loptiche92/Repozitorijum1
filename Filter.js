import React, { Component } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { sortby,sortP,sizeP,sizeBy,filterBy } from '../productSlice'
const Filter = () => {
    const dispatch = useDispatch()
    const {list,filteredProducts} = useSelector(state=> state.products)
    const handleSortChange = (x) => {
        dispatch(sortby(x))
    }
    const handleSizeChange = (x) => {
        dispatch(sizeBy(x))
        listProducts()
    }
    let s = [...list]
    const listProducts = () => {
        if(sortP !== ''){
            dispatch(filterBy(s))
        }
        dispatch(filterBy(list))
    }

    return(
        <div className="row">
        <div className="col-md-12">
            <div id='filter' className="row">
                <div className="col-md-4 row" id='filtered'> 
                {list.length} 
                products found
                </div>
                <div className="col-md-4">
                    <label>Order by
                        <select className="form-control"
                         value={sortP} 
                         onChange={(e)=>handleSortChange(e.target.value)}
                         >
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label> Filter Size
                        <select className="form-control" 
                        value={sizeP} 
                        onChange={(e)=>handleSizeChange(e.target.value)}
                        >
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Filter

// export default class Filter extends Component {
//   render() {
//     return (
//         <div className="row">
//                 <div className="col-md-9">
//                     <div className="row">
//                         <div className="col-md-4"> {this.props.count} products found</div>
//                         <div className="col-md-4">
//                             <label>Order by
//                                 <select className="form-control" onChange={this.props.handleSortChange}>
//                                     <option value="">Select</option>
//                                     <option value="lowestprice">Lowest to highest</option>
//                                     <option value="highestprice">Highest to lowest</option>
//                                 </select>
//                             </label>
//                         </div>
//                         <div className="col-md-4">
//                             <label> Filter Size
//                                 <select className="form-control" onChange={this.props.handleSizeChange}>
//                                     <option value="">ALL</option>
//                                     <option value="x">XS</option>
//                                     <option value="s">S</option>
//                                     <option value="m">M</option>
//                                     <option value="l">L</option>
//                                     <option value="xl">XL</option>
//                                     <option value="xxl">XXL</option>
//                                 </select>
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     )
//   }
// }
