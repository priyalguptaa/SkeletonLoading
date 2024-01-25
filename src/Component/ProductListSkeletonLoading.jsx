import React from 'react'
import '../CSS/ProductListSkLoading.css'
const ProductListSkeletonLoading = () => {
  return (
    <div className="product-list">
       {
         Array.from({length : 20}).map((el,i)=>{
            return <div key={i} className='product-card shimmer-card'>
                <div className='skeleton-image' style={{marginLeft: '51px'}}></div>
                <div className='skeleton-title'></div>
                <div className='skeleton-description'></div>
                <div className='skeleton-price'></div>
            </div>
            // with the help of Array.form we are just creating a array of 20th length 
            //and here it is provided a key so with the help of key it create div one by one 20 div it will created
            // map function har itration me ek div element create kar rha he
         })
       }
    </div>
  )
}

export default ProductListSkeletonLoading