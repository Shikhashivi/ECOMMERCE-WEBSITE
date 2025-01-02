// import React, { useState } from 'react'
// import Data from "../../Data.json"
// import Product from '../Components/Product'

// const Products = () => {
//     const [products, setProduct] = useState(Data)

//     const filterOut = products.filter((curValue)=>{
//         return curValue.name.includes(products)
//     })
   
//      const getData =(e)=>{
//         setProduct(e.target.value)
//     }

    

//     return (
//         <div className="contaner pro-cnt w-80 h-10 ms-5 px-4">
//             <div className='row row-cols-1 row-cols-sm-4 g-2 mx-12 my-6  mx-2 flex-wrap'>
//                 {
//                     Data.map((product) => (
//                         <Product product={product} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Products

import React from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";

const Products = ({searchTerm}) => {

  // Filter products based on the search term
  const filteredProducts = Data.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );




  return (
    <div className="container  w-80 h-10 ms-5 px-4">
     
      <div className="row row-cols-1 row-cols-sm-4 g-2 mx-12 my-6 mx-2 flex-wrap">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
